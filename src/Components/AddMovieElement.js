import React ,{useState} from 'react';
import Modal from "react-modal";


const AddMovieElement = ({Add}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("");


    const openModal=()=>{
        setIsOpen(true)
    }
    const closeModal=()=>{
        setIsOpen(false)

    }

    const AddMovie=()=>{
        Add({
         id:Math.random(),   name:name,description:description,rating:rating, date:date, type:type
        })
        closeModal()
    }
  return (
    <div>
      <div className="Add-btn-container">
        <div className="btn-play" onClick={openModal}>
          <span>
            {" "}
            <ion-icon className="icon" name="play"></ion-icon>{" "}
          </span>
          +
        </div>
        <Modal
          className="add-modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}

        >
          <h1 className="addMovie-h1">Add A Movie</h1>
          <form>
            <label  >Movie Name</label>
            <input
              type="text"
              name="name"
              onChange={(el)=>(setName (el.target.value))}  
            />
            <label>Movie Release Date</label>
            <input
              type="number"
              name="date"
              onChange={(el)=>(setDate (el.target.value))}  
                        />
            <label>Movie Image</label>
            <input
              type="url"
              name="image"
              onChange={(el)=>(setImage (el.target.value))}  

            />
            <label>Movie Type</label>
            <input
              type="text"
              name="type"
              onChange={(el)=>(setType (el.target.value))}  

            />
            <div className="rating-search">
              <input
            onChange={(el)=>(setRating (el.target.value))}  

              />
            </div>
            <label>Movie Summary</label>
            <textarea
              type="text"
              name="description"
              onChange={(el)=>(setDescription (el.target.value))}  
              required
            />
          </form>
          <button className="Modal-btn" onClick={()=>AddMovie()} >
            Add
          </button> 
          <button className="Modal-btn" onClick={closeModal}>close</button>
        </Modal>
      </div>
    </div>
  )
}

export default AddMovieElement