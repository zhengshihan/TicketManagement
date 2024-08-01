import React from "react";
import TicketCard from "../(components)/TicketCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const getTickets = async () => {
  const baseURL = process.env.BASE_URL;
  try {
    const res = await fetch(`${baseURL}/api/Tickets`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user.role !== "admin") {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center p-6 bg-red-100 border border-red-400 text-red-700 rounded">
          <p className="text-2xl font-bold mb-4">
            You are not authorized to view this page!
          </p>
          <p className="text-lg">
            Please contact your administrator for access.
          </p>
        </div>
      </div>
    );
  }

  const data = await getTickets();

  // Make sure we have tickets needed for production build.
  if (!data?.tickets) {
    return <p>No tickets.</p>;
  }

  const tickets = data.tickets;

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
