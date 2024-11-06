'use client';

import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

function RoleInitPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get('role'); // Extract role from query params
  console.log("Role from query params:", role);

  useEffect(() => {
    const updateUserRole = async () => {
      console.log("Received role in role-init:", role);
      console.log("user  ", user)// Debug role here
      if (isLoaded && user && role) {
        try {
          if (!user.publicMetadata?.role) {
            console.log("role inside if ", role)
            const response = await fetch('/api/updateRole', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userId: user.id,
                role: role,
              }),
            });

            const data = await response.json();
            if (response.ok) {
              console.log('Role updated successfully:', data.message);
            } else {
              console.error('Error updating role:', data.error);
            }
          }

          // Redirect based on role
          switch (role) {
            case 'admin':
              router.push('/dashboard');
              break;
            case 'seller':
              router.push('/dashboard');
              break;
            case 'user':
              router.push('/dashboard');
              break;
            default:
              router.push('/'); // Default fallback
              break;
          }
        } catch (err) {
          console.error('Error updating user role:', err);
        }
      }
    };

    updateUserRole();
  }, [isLoaded, user, role, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-700">Initializing Role...</h2>
    </div>
  );
}

export default RoleInitPage;
