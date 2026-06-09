import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Index() {


  const navigate  = useNavigate()

  return (
    <div>

      <h1 className="text-center text-2xl font-bold">Welcome to Admin page</h1>

      <div className="bg-red-300 max-w-xl ml-auto mr-auto w-full">
        <li className="flex bg-amber-300 justify-around text-lg font-semibold">
          <Link  to="/test">
              <ul>Tests</ul>
          </Link>
          <ul onClick={() => navigate(`/admin/exams`)}>Exam</ul>
          <ul>Reports</ul>
        </li>
      </div>
    </div>
  );
}