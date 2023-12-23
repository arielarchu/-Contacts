import { useState } from "react";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";
import defaultImage from "../photos/blue.png";
import { useNavigate } from "react-router-dom";


export default function Create() {
  const [cover, setCover] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [intro, setIntro] = useState("");
  const [review, setReview] = useState("");

  const store = useAppContext();
  const navigate= useNavigate();
  
  
  

  const inputStyles = {
    formContainer: {
      width: "400px",
      margin: "0 auto",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      margin: "15px 0",
    },
    title: {
      fontSize: "16px",
      textAlign: "left",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      fontSize: "16px",
    },
  };

  function handleChange(e) {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "author":
        setAuthor(e.target.value);
        break;
      case "intro":
        setIntro(e.target.value);
        break;
      case "review":
        setReview(e.target.value);
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newPeople = {
      id: crypto.randomUUID(),
      cover,
      title,
      author,
      intro,
      review,
    };

    store.createItem(newPeople);
  navigate('/');  
  }

  function handleOnChangeFile(e) {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();
  
    reader.onloadend = function () {
      if (reader.result) {
        setCover(reader.result.toString());
      } else {
        // Si no se selecciona una imagen, establece el estado a null
        setCover(null);
      }
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      // Si no se selecciona ningún archivo, establece el estado a null
      setCover(null);
    }
  }
  


  return (
    <Layout>
      <form onSubmit={handleSubmit} style={inputStyles.formContainer}>
        
      <div style={inputStyles.container}>
          <div style={inputStyles.title}>Image</div>
          <input type="file" name="cover" onChange={handleOnChangeFile} />
          <div>{!!cover ? <img src={cover} width="200" /> : <img src={defaultImage} width="200" />}</div>

        </div>


        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Name and Last Name</div>
          <input
            style={inputStyles.input}
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Phone</div>
          <input
            style={inputStyles.input}
            type="text"
            name="author"
            onChange={handleChange}
            value={author}
          />
        </div>


        <div style={inputStyles.container}>
          <div style={inputStyles.title}>e-mail</div>
          <input
            style={inputStyles.input}
            type="text"
            name="intro"
            onChange={handleChange}
            value={intro}
          />
        </div>

       

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Address</div>
          <input
            style={inputStyles.input}
            type="text"
            name="review"
            onChange={handleChange}
            value={review}
          />
        </div>

        <input
          type="submit"
          value="Add"
          style={{
            padding: "15px 20px",
            minWidth: "200px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#1e9638",
            color: "white",
            fontWeigth: "bolder",
            fontSize: "18px",
            aHover: "grey",
          }}
        />
      </form>
    </Layout>
  );
}