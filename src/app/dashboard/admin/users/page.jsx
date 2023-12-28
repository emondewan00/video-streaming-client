"use client";
import React, { useEffect, useState } from "react";

import UserTable from "@/components/dashboard/admin/users/UserTable";
import Header from "@/components/dashboard/admin/users/Header";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

 


  return (
    <div className="my-4 md:my-0">
      {/* header */}
      <Header />
      <UserTable users={users} />
    </div>
  );
};

export default AllUsers;
