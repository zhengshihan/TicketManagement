"use client"; // 使用客户端组件

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import TicketCard from "../(components)/TicketCard";

const baseURL = process.env.BASE_URL;
console.log(baseURL);

const UserTickets = () => {
  const { data: session } = useSession();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      if (!session?.user?.id) {
        return;
      }

      try {
        // 通过 GET 请求获取用户 tickets
        const response = await fetch(
          `/api/Tickets/user-tickets?userId=${session.user.id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tickets");
        }

        const data = await response.json();
        setTickets(data.tickets);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [session]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Your Tickets</h1>

      <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
        {tickets.length > 0 ? (
          tickets.map((item) => <TicketCard ticket={item} />)
        ) : (
          <p>No tickets found.</p>
        )}
      </div>
    </div>
  );
};

export default UserTickets;
