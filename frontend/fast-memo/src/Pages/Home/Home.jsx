import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import NoteCard from "../../Components/Cards/NoteCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className=" container mx-auto">
        <NoteCard
          title="Meeting with the team on 23rd May"
          date="23rd May 2024"
          content="Meeting with the team on 23rd MayMeeting with the team on 23rd May"
          tags="#Meeting"
          isPinned={true}
          onEdit={()=>{}}
          onDelete={()=>{}}
          onPinNote={()=>{}}
        />
      </div>
    </div>
  );
};

export default Home;
