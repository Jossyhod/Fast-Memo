import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import NoteCard from "../../Components/Cards/NoteCard";
import { MdAdd, MdOutlineAlarmAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <div>
      <Navbar />
      <div className=" container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="Meeting with the team on 23rd May"
            date="23rd May 2024"
            content="Meeting with the team on 23rd MayMeeting with the team on 23rd May"
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button
        className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10 "
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>
      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            background: "rgb(0,0,0,0.2",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          notedata={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({ isShown: false, type: "add", data: null });
          }}
        />
      </Modal>
    </div>
  );
};

export default Home;
