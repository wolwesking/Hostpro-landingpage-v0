<script lang="ts">
	import { goto } from '$app/navigation';
	import { loginUser, registerUser } from '$lib/Authmanager';

	let isRegister: boolean = false; // Toggle between Login and Register

	let email: string = '';
	let username: string = '';
	let password: string = '';
	let confirmPassword: string = '';
	let errorMessage: string = ''; // Error message state

	// Function to check password validity during registration
	function checkPassword() {
		// Basic check: password length and matching confirmation password
		if (password.length < 8) {
			errorMessage = 'Password must be at least 8 characters long.';
			return false;
		}
		if (isRegister && password !== confirmPassword) {
			errorMessage = 'Passwords do not match.';
			return false;
		}
		errorMessage = ''; // Clear error message if validation passes
		return true;
	}

	const handleLogin = async () => {
		if (checkPassword()) {
			const res: any = await loginUser(email, password);
			if (res === 'Success') {
				goto('/dashboard/servers');
			} else {
				errorMessage = res;
				return;
			}
		}
	};

	const handleRegister = async () => {
		if (checkPassword()) {
			if (!username) {
				errorMessage = 'Username is required.';
				return;
			}
			const res: any = await registerUser(email, username, password, confirmPassword);
			if (res === 'Success') {
				const log: any = await loginUser(email, password);
				if (log === 'Success') {
					goto('/dashboard/servers');
				} else {
					errorMessage = log;
					return;
				}
			}
		}
	};
</script>

<section class="bg-base03 min-h-screen flex items-center justify-center py-16 px-4">
	<div class="max-w-md w-full bg-base02 p-8 rounded-lg shadow-lg">
		<div class="text-center mb-6">
			<h2 class="text-3xl font-bold text-terminal-green">
				{isRegister ? '> Register' : '> Login'}
			</h2>
			<p class="text-base1 mt-2">
				{isRegister ? 'Create a new account' : 'Sign in to your account'}
			</p>
		</div>

		<form class="space-y-6" on:submit|preventDefault={isRegister ? handleRegister : handleLogin}>
			<!-- Display Error Message -->
			{#if errorMessage}
				<div class="bg-red text-base3 text-sm p-3 rounded-md mb-4">
					{errorMessage}
				</div>
			{/if}

			<!-- Email Input -->
			<div>
				<label for="email" class="block text-sm font-medium text-base1 mb-2">Email Address</label>
				<input
					type="email"
					id="email"
					bind:value={email}
					required
					class="block w-full px-4 py-2 border border-base00 rounded-lg text-very-light-green bg-base03 placeholder-base1 focus:ring-accent-blue focus:border-accent-blue focus:outline-none"
					placeholder="you@example.com"
				/>
			</div>

			<!-- Username Input (only for registration) -->
			{#if isRegister}
				<div>
					<label for="username" class="block text-sm font-medium text-base1 mb-2">Username</label>
					<input
						type="text"
						id="username"
						bind:value={username}
						required
						class="block w-full px-4 py-2 border border-base00 rounded-lg text-very-light-green bg-base03 placeholder-base1 focus:ring-accent-blue focus:border-accent-blue focus:outline-none"
						placeholder="Your username"
					/>
				</div>
			{/if}

			<!-- Password Input -->
			<div>
				<label for="password" class="block text-sm font-medium text-base1 mb-2">Password</label>
				<input
					type="password"
					id="password"
					bind:value={password}
					required
					class="block w-full px-4 py-2 border border-base00 rounded-lg text-very-light-green bg-base03 placeholder-base1 focus:ring-accent-blue focus:border-accent-blue focus:outline-none"
					placeholder="********"
				/>
			</div>

			<!-- Confirm Password Input for Registration -->
			{#if isRegister}
				<div>
					<label for="confirmPassword" class="block text-sm font-medium text-base1 mb-2"
						>Confirm Password</label
					>
					<input
						type="password"
						id="confirmPassword"
						bind:value={confirmPassword}
						required
						class="block w-full px-4 py-2 border border-base00 rounded-lg text-very-light-green bg-base03 placeholder-base1 focus:ring-accent-blue focus:border-accent-blue focus:outline-none"
						placeholder="********"
					/>
				</div>
			{/if}

			<!-- Submit Button -->
			<button
				type="submit"
				class="w-full py-2 px-4 text-very-light-green bg-medium-green rounded-lg font-bold hover:bg-light-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue shadow-md"
			>
				{isRegister ? 'Register' : 'Login'}
			</button>

			<!-- Toggle Between Login and Register -->
			<div class="mt-4 text-center">
				<p class="text-base1">
					{isRegister ? 'Already have an account?' : 'Don’t have an account?'}
					<button
						type="button"
						class="text-accent-yellow hover:underline focus:outline-none ml-1"
						on:click={() => (isRegister = !isRegister)}
					>
						{isRegister ? 'Login' : 'Register'}
					</button>
				</p>
			</div>
		</form>
	</div>
</section>
