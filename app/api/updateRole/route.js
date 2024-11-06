// app/api/updateRole/route.js
import { clerkClient } from '@clerk/clerk-sdk-node';

export async function POST(req) {
  const { userId, role } = await req.json();
  console.log("Received role:", role); // Log the role value to verify

  try {
    // Ensure the role is not undefined and has a valid value
    if (!role) {
      return new Response(JSON.stringify({ error: 'Role is required' }), { status: 400 });
    }

    // Update the user's public metadata with the role
    await clerkClient.users.updateUser(userId, {
      publicMetadata: {
        role: role, // Use the correct role here
      },
    });

    return new Response(JSON.stringify({ message: 'Role updated successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error updating role:', error);
    return new Response(JSON.stringify({ error: 'Failed to update role' }), { status: 500 });
  }
}
