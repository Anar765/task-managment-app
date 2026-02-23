function getTasksCompletionPercentage(completedTasks: number, totalTasks: number): number {
    return totalTasks === 0 ? 0 : Math.floor( completedTasks * 100 / totalTasks);
}

export default getTasksCompletionPercentage;