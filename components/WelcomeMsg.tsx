import React from 'react';
import { currentUser } from "@clerk/nextjs";

async function WelcomeMsg() {
  const user = await currentUser();

  if (!user) {
    return <div>error</div>;
  }

  return (
    <div className="flex w-full mb-12">
      <h1 className="text-4xl font-bold">
        Welcome {user.firstName} {user.lastName} 🙂
      </h1>
    </div>
  );
}

export default WelcomeMsg;
