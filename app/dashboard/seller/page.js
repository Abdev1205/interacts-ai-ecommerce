'use client';

import { useUser, UserButton } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const RoleDashboard = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const [role, setRole] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && user) {
      // Get the user's role from the URL or their public metadata
      setRole(user?.publicMetadata?.role);
    }

    // If the user is not signed in, redirect to login
    if (!isSignedIn) {
      router.push('/login');
    }
  }, [isLoaded, user, isSignedIn, router]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl p-4 mx-auto bg-white rounded-lg mt-[4rem] border ">
      <h1 className="mb-6 text-3xl font-semibold text-center">Welcome to your {role} Dashboard</h1>

      <div className="flex justify-end">
        {/* Clerk's UserButton for logout */}
        <UserButton />
      </div>

      <div className="text-lg">
        <p className="mb-2">
          <strong>Name:</strong> {user?.firstName} {user?.lastName}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {user?.emailAddresses[0]?.email}
        </p>
        <p className="mb-4">
          <strong>Role:</strong> {role || 'No role assigned'}
        </p>
      </div>

      <div className="space-y-4">
        {/* Display role-based content */}
        {role === 'admin' && (
          <div>
            <h3 className="text-xl font-semibold">Admin Section</h3>
            <p>This is the admin-only section of your dashboard.</p>
          </div>
        )}

        {role === 'seller' && (
          <div>
            <h3 className="text-xl font-semibold">Seller Section</h3>
            <p>This is the seller-only section of your dashboard.</p>
          </div>
        )}

        {role === 'user' && (
          <div>
            <h3 className="text-xl font-semibold">User Section</h3>
            <p>This is the user-only section of your dashboard.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoleDashboard;
