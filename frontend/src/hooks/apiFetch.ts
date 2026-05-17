const apiFetch = async (
    url: string, 
    options: RequestInit = {},
    accessToken: string | null,
    onRefresh: (newToken: string) => void,
    onLogout: () => void
) => {
    const headers = {
        ...options.headers,
        'Content-Type': 'application/json',
        ...(accessToken ? { 'Authorization': `Bearer ${accessToken}` } : {})
    };

    let response = await fetch(url, { ...options, headers });

    if(response.status === 401 || response.status === 403) {
        try {
            const refreshRes = await fetch(`${import.meta.env.VITE_API_URL}/auth/refresh`, {
                method: "GET",
                credentials: "include"
            });

            if(refreshRes.ok) {
                const { accessToken: newAccessToken } = await refreshRes.json();
                onRefresh(newAccessToken);

                const retryHeaders = {
                    ...headers,
                    "Authorization": `Bearer ${newAccessToken}`
                };

                response = await fetch(url, { ...options, headers: retryHeaders });
            } else {
                onLogout();
                return Promise.reject(new Error("Session Expired"));
            }
        } catch (error) {
            console.error("Refresh token error: ", error);
            onLogout();
            return Promise.reject(new Error("Session Expired"));
        }
    }

    return response;
};

export default apiFetch;