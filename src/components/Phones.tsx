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
                    <tr>
                        <td>Név</td>
                        <td>Ár</td>
                        <td>Memória</td>
                        <td>Tárhely</td>
                        <td>Kijelző</td>
                        <td>Operációs rendszer</td>
                    </tr>
                </thead>
                <tbody>
                    {telefonok.map((telefon)=>(
                    <tr key={telefon.id}>
                        <td>{telefon.nev}</td>
                        <td>{telefon.ar}</td>
                        <td>{telefon.memoria}</td>
                        <td>{telefon.tarhely}</td>
                        <td>{telefon.kijelzo}</td>
                        <td>{telefon.operaciosRendszer}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}