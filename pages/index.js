import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Modal from '../components/Modal';
import { useState } from 'react'; 
    var data = [

    {

    of:"0282349", 
    referencia: "0323344",
    img: "/images/0323344.jpg",
    impressora: "Mimaki",
    prioridade_num: "3",
    status: "Imprimindo",

    },
    {
      
    of:"0285544", 
    referencia: "0211234",
    img: "/images/0211234.jpg",
    impressora: "Firejet",
    prioridade_num: "2",
    status: "Imprimindo",

    },
    {

    of:"0285545", 
    referencia: "0332277",
    img: "/images/0332277.jpg",
    impressora: "Mimaki",
    prioridade_num: "1",
    status: "Aguardando",

    },
    {

    of:"0285569", 
    referencia: "0336544",
    img: "/images/0336544.jpg",
    impressora: "Mimaki",
    prioridade_num: "4",
    status: "Aguardando",

    },
    {

    of:"0285678", 
    referencia: "0518263",
    img: "/images/0518263.jpg",
    impressora: "Mimaki",
    prioridade_num: "2",
    status: "Aguardando",

    },
    {

    of:"0282349", 
    referencia: "0323344",
    img: "/images/0323344.jpg",
    impressora: "Mimaki",
    prioridade_num: "3",
    status: "Imprimindo",

    },
    {
      
    of:"0285544", 
    referencia: "0211234",
    img: "/images/0211234.jpg",
    impressora: "Firejet",
    prioridade_num: "2",
    status: "Imprimindo",

    },
    {

    of:"0285545", 
    referencia: "0332277",
    img: "/images/0332277.jpg",
    impressora: "Mimaki",
    prioridade_num: "1",
    status: "Aguardando",

    },
    {

    of:"0285569", 
    referencia: "0336544",
    img: "/images/0336544.jpg",
    impressora: "Mimaki",
    prioridade_num: "4",
    status: "Aguardando",

    },
    {

    of:"0285678", 
    referencia: "0518263",
    img: "/images/0518263.jpg",
    impressora: "Mimaki",
    prioridade_num: "2",
    status: "Aguardando",

    },


  ];
  
export default function Home() {
  
    return (
        <>
            <Navbar/>
            <Card ofs={data}/>
            <Modal/>
        </>
  )
}
