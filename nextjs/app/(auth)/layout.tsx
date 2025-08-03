// app/(auth)/layout.tsx

import React from "react";

const AuthenticationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      {children}
    </div>
  );
};

export default AuthenticationLayout;
