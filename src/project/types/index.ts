export type Project = {
    id: string;
    name: string;
    version: string;
    description: string;
}

export type ResponseSuccessProject = {
    success: boolean;
    error: {
        status: boolean;
        code: number;
        message: string;
    }
    data: Project;
}