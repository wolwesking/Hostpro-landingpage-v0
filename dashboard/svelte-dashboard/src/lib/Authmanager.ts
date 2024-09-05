import pb from "./Pocketbase";

export const registerUser = async (
    email: string,
    username: string,
    password: string,
    confirmPassword: string
) => {
    try {
        if (password !== confirmPassword) {
            return "Passwords do not match";
        }

        await pb.collection('users').create({
            email,
            username,
            password,
            passwordConfirm: confirmPassword,
        });

        return "Success";

    } catch (error: any) {
        return error.message;
    }
};

export const loginUser = async (email: string, password: string) => {
    try {
        await pb.collection('users').authWithPassword(email, password);
        return "Success";

    } catch (error: any) {
        return error.message;
    }
};

export const logoutUser = async () => {
    try {
        pb.authStore.clear();
        return "Logged out successfully";
    } catch (error) {
        console.error('Error logging out:', error);
        throw new Error('Error logging out.');
    }
};

// Check if the user is authenticated by validating the session with the server
export const isAuthenticated = async (): Promise<boolean> => {
	try {
		// Fetch the authenticated user's data from the server
		const currentUser = await pb.collection('users').authRefresh();

		// If the user data is successfully fetched, the session is valid
		return !!currentUser;
	} catch (error) {
		// If there's an error (e.g., session is invalid), clear the auth store
		pb.authStore.clear();
		console.error('Authentication check failed:', error);
		return false;
	}
};


export const getCurrentUser = () => {
    return pb.authStore.model;
};
