import { createContext } from "react";
import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import AllUsers from "./components/AllUsers";
import MostLikedPost from "./components/MostLikedPost";
import MostCommentPost from "./components/MostCommentPost";
import { Route, Routes } from "react-router-dom";

type comment = {
  autherID: number;
  autherName: string;
  content: string;
};

type post = {
  id: number;
  title: string;
  content: string;
  date: string;
  numberOfLikes: number;
  author: string;
  numberOfComments: number;
  comments: Array<comment>;
};
type Author = {
  id: number;
  name: string;
  mobile: string;
  photo: string; // url
  countLikes: number;
  countPostes: number;
  posts: Array<post>;
};

type projectData = {
  authors: Array<Author>;
  mostLikePosts: Array<post>;
  mostLikeCommentPosts: Array<post>;
};
export const contextData = createContext<projectData>({
  authors: [
    {
      id: 0,
      name: "",
      mobile: "",
      photo: "",
      countLikes: 0,
      countPostes: 0,
      posts: [
        {
          id: 0,
          title: "",
          content: "",
          numberOfComments: 0,
          numberOfLikes: 0,
          author: "",
          date: "",
          comments: [
            {
              autherID: 0,
              autherName: "",
              content: "",
            },
          ],
        },
      ],
    },
  ],
  mostLikePosts: [],
  mostLikeCommentPosts: [],
});

function App() {
  const data: projectData = {
    authors: [
      {
        id: 1,
        name: "Ahmed Adel",
        mobile: "0100225555",
        photo: "https://joeschmoe.io/api/v1/Emily%20Langosh",
        countLikes: 35,
        countPostes: 10,
        posts: [
          {
            id: 1,
            title: "Hello our New Developer",
            content:
              " Becoming a pro developer is a key step if you want to become an authority in your field. In turn, that reputation as an authority opens up more opportunities. Whether in moving up the corporate ladder or becoming the go-to independent expert in your field, your authoritative position will give you the platform to shape your career as a developer and personal life more to your liking. Learn the latest technologies to become a web developer and create websites with HTML, CSS. You will also learn the basics of JavaScript to make your pages interactive. ",
            numberOfComments: 2,
            numberOfLikes: 2,
            author: "Ahmed adel",
            date: "1/1/2022",
            comments: [
              {
                autherID: 2,
                autherName: "Heba Atef",
                content: "This post is so helpful",
              },
              {
                autherID: 3,
                autherName: "Sara Ayman",
                content: "I loved this post alot",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Heba Atef",
        mobile: "01150584672",
        photo: "https://joeschmoe.io/api/v1/Bianka%20Ward",
        countLikes: 34,
        countPostes: 9,
        posts: [
          {
            id: 1,
            title: "Welcome in React world",
            content:
              "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.",
            numberOfComments: 1,
            numberOfLikes: 5,
            author: "Heba Atef",
            date: "15/10/2022",
            comments: [
              {
                autherID: 1,
                autherName: "Ahmed Adel",
                content: "Wow, how this post is beautiful",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Sara Ayman",
        mobile: "01152094649",
        photo: "https://joeschmoe.io/api/v1/Marc%20Feest",
        countLikes: 33,
        countPostes: 8,
        posts: [
          {
            id: 1,
            title: "What Is a Web Developer? ",
            content:
              "Web developers design, maintain, and optimize websites and other web-based applications for consumer use. They rely on insights from computer programming, software development, and graphic design, often working alongside professionals in each field.Most web developers specialize in several aspects of the development process. Duties, tools, and techniques vary depending on the position. The following information provides insight into some common web developer roles",
            numberOfComments: 1,
            numberOfLikes: 4,
            author: "Sara Ayman",
            date: "30/5/2022",
            comments: [
              {
                autherID: 2,
                autherName: "Heba Atef",
                content: "It is so helpfull",
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "Mona Ahmed",
        mobile: "0100225555",
        photo: "https://joeschmoe.io/api/v1/Adalberto%20Bashirian",
        countLikes: 32,
        countPostes: 7,
        posts: [
          {
            id: 1,
            title: "Hello in React Course ",
            content:
              " Whether you are just beginning or looking to develop web apps that utilize the React library, Udemy has a comprehensive selection of React courses. Take one of the many React training courses on Udemy from real world instructors, and develop your skills in this exciting field.",
            numberOfComments: 2,
            numberOfLikes: 2,
            author: "Ahmed adel",
            date: "1/1/2022",
            comments: [
              {
                autherID: 2,
                autherName: "Heba Atef",
                content: "This post is so helpful",
              },
              {
                autherID: 3,
                autherName: "Sara Ayman",
                content: "I loved this post alot",
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: "Hadeer Reda",
        mobile: "01150584672",
        photo: "https://joeschmoe.io/api/v1/Rahul%20Thompson",
        countLikes: 31,
        countPostes: 6,
        posts: [
          {
            id: 1,
            title: "React Redux",
            content:
              "React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.",
            numberOfComments: 1,
            numberOfLikes: 5,
            author: "Heba Atef",
            date: "15/10/2022",
            comments: [
              {
                autherID: 1,
                autherName: "Ahmed Adel",
                content: "Wow, how this post is beautiful",
              },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "Aya Mohamed",
        mobile: "01152094649",
        photo: "https://joeschmoe.io/api/v1/Retha%20Reynolds",
        countLikes: 30,
        countPostes: 5,
        posts: [
          {
            id: 1,
            title: "Material UI ",
            content:
              "MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.",
            numberOfComments: 1,
            numberOfLikes: 4,
            author: "Sara Ayman",
            date: "30/5/2022",
            comments: [
              {
                autherID: 2,
                autherName: "Heba Atef",
                content: "It is so helpfull",
              },
            ],
          },
        ],
      },
    ],
    mostLikePosts: [
      {
        id: 1,
        title: "Hello our New Developer",
        content:
          " Becoming a pro developer is a key step if you want to become an authority in your field. In turn, that reputation as an authority opens up more opportunities. Whether in moving up the corporate ladder or becoming the go-to independent expert in your field, your authoritative position will give you the platform to shape your career as a developer and personal life more to your liking. Learn the latest technologies to become a web developer and create websites with HTML, CSS. You will also learn the basics of JavaScript to make your pages interactive. ",
        numberOfComments: 2,
        numberOfLikes: 2,
        author: "Ahmed adel",
        date: "1/1/2022",
        comments: [
          {
            autherID: 2,
            autherName: "Heba Atef",
            content: "This post is so helpful",
          },
          {
            autherID: 3,
            autherName: "Sara Ayman",
            content: "I loved this post alot",
          },
        ],
      },
      {
        id: 1,
        title: "Welcome in React world",
        content:
          "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.",
        numberOfComments: 1,
        numberOfLikes: 5,
        author: "Heba Atef",
        date: "15/10/2022",
        comments: [
          {
            autherID: 1,
            autherName: "Ahmed Adel",
            content: "Wow, how this post is beautiful",
          },
        ],
      },
      {
        id: 1,
        title: "What Is a Web Developer? ",
        content:
          "Web developers design, maintain, and optimize websites and other web-based applications for consumer use. They rely on insights from computer programming, software development, and graphic design, often working alongside professionals in each field.Most web developers specialize in several aspects of the development process. Duties, tools, and techniques vary depending on the position. The following information provides insight into some common web developer roles",
        numberOfComments: 1,
        numberOfLikes: 4,
        author: "Sara Ayman",
        date: "30/5/2022",
        comments: [
          {
            autherID: 2,
            autherName: "Heba Atef",
            content: "It is so helpfull",
          },
        ],
      },
      {
        id: 1,
        title: "Hello in React Course ",
        content:
          " Whether you are just beginning or looking to develop web apps that utilize the React library, Udemy has a comprehensive selection of React courses. Take one of the many React training courses on Udemy from real world instructors, and develop your skills in this exciting field.",
        numberOfComments: 2,
        numberOfLikes: 2,
        author: "Ahmed adel",
        date: "1/1/2022",
        comments: [
          {
            autherID: 2,
            autherName: "Heba Atef",
            content: "This post is so helpful",
          },
          {
            autherID: 3,
            autherName: "Sara Ayman",
            content: "I loved this post alot",
          },
        ],
      },
      {
        id: 1,
        title: "React Redux",
        content:
          "React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.",
        numberOfComments: 1,
        numberOfLikes: 5,
        author: "Heba Atef",
        date: "15/10/2022",
        comments: [
          {
            autherID: 1,
            autherName: "Ahmed Adel",
            content: "Wow, how this post is beautiful",
          },
        ],
      },
      {
        id: 1,
        title: "Material UI ",
        content:
          "MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.",
        numberOfComments: 1,
        numberOfLikes: 4,
        author: "Sara Ayman",
        date: "30/5/2022",
        comments: [
          {
            autherID: 2,
            autherName: "Heba Atef",
            content: "It is so helpfull",
          },
        ],
      },
    ],
    mostLikeCommentPosts: [
      {
        id: 1,
        title: "Hello our New Developer",
        content:
          " Becoming a pro developer is a key step if you want to become an authority in your field. In turn, that reputation as an authority opens up more opportunities. Whether in moving up the corporate ladder or becoming the go-to independent expert in your field, your authoritative position will give you the platform to shape your career as a developer and personal life more to your liking. Learn the latest technologies to become a web developer and create websites with HTML, CSS. You will also learn the basics of JavaScript to make your pages interactive. ",
        numberOfComments: 2,
        numberOfLikes: 2,
        author: "Ahmed adel",
        date: "1/1/2022",
        comments: [
          {
            autherID: 2,
            autherName: "Heba Atef",
            content: "This post is so helpful",
          },
          {
            autherID: 3,
            autherName: "Sara Ayman",
            content: "I loved this post alot",
          },
        ],
      },
      {
        id: 1,
        title: "Welcome in React world",
        content:
          "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.",
        numberOfComments: 1,
        numberOfLikes: 5,
        author: "Heba Atef",
        date: "15/10/2022",
        comments: [
          {
            autherID: 1,
            autherName: "Ahmed Adel",
            content: "Wow, how this post is beautiful",
          },
        ],
      },
      {
        id: 1,
        title: "What Is a Web Developer? ",
        content:
          "Web developers design, maintain, and optimize websites and other web-based applications for consumer use. They rely on insights from computer programming, software development, and graphic design, often working alongside professionals in each field.Most web developers specialize in several aspects of the development process. Duties, tools, and techniques vary depending on the position. The following information provides insight into some common web developer roles",
        numberOfComments: 1,
        numberOfLikes: 4,
        author: "Sara Ayman",
        date: "30/5/2022",
        comments: [
          {
            autherID: 2,
            autherName: "Heba Atef",
            content: "It is so helpfull",
          },
        ],
      },
      {
        id: 1,
        title: "Hello in React Course ",
        content:
          " Whether you are just beginning or looking to develop web apps that utilize the React library, Udemy has a comprehensive selection of React courses. Take one of the many React training courses on Udemy from real world instructors, and develop your skills in this exciting field.",
        numberOfComments: 2,
        numberOfLikes: 2,
        author: "Ahmed adel",
        date: "1/1/2022",
        comments: [
          {
            autherID: 2,
            autherName: "Heba Atef",
            content: "This post is so helpful",
          },
          {
            autherID: 3,
            autherName: "Sara Ayman",
            content: "I loved this post alot",
          },
        ],
      },
      {
        id: 1,
        title: "React Redux",
        content:
          "React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.",
        numberOfComments: 1,
        numberOfLikes: 5,
        author: "Heba Atef",
        date: "15/10/2022",
        comments: [
          {
            autherID: 1,
            autherName: "Ahmed Adel",
            content: "Wow, how this post is beautiful",
          },
        ],
      },
      {
        id: 1,
        title: "Material UI ",
        content:
          "MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.",
        numberOfComments: 1,
        numberOfLikes: 4,
        author: "Sara Ayman",
        date: "30/5/2022",
        comments: [
          {
            autherID: 2,
            autherName: "Heba Atef",
            content: "It is so helpfull",
          },
        ],
      },
    ],
  };
  return (
    <contextData.Provider value={data}>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<AllUsers />}></Route>
        <Route path="/MostLikedPost" element={<MostLikedPost />}></Route>
        <Route path="/MostCommentPost" element={<MostCommentPost />}></Route>
      </Routes>
    </contextData.Provider>
  );
}

export default App;
