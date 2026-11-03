import { useEffect } from "react";
import { useState } from "react";

export default function Phones(){
    
    type Telefon = {
        id:number;
        nev: string;
        ar: number;
        memoria: number;
        tarhely: number;
        kijelzo: number;
        operaciosRendszer: string;
    }

    const [telefonok, setTelefonok] = useState<Telefon[]>([]);

    useEffect(
        () => {
            async function adatokBetoltese(){
                try{
                    const valasz = await fetch("/phones.json");
                    const adatok:Telefon[] = await valasz.json();
                    setTelefonok(adatok);
                }
                catch(err){
                    console.log(err);
                }
            }
            adatokBetoltese()
        },[]
    )

    useEffect(
        () => {
            console.log("adatok betöltődtek")
        },[telefonok]
    )

    return(
        <>
            <h2>Telefonok lista</h2>
            <table>
                <thead>
                    <tr>Név</tr>
                    <tr>Ár</tr>
                    <tr>Memória</tr>
                    <tr>Tárhely</tr>
                    <tr>Kijelző</tr>
                    <tr>Operációs rendszer</tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </>
    )
}