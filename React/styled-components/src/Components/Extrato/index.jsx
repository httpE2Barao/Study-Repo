import React from "react";
import { Box, Botao } from '../UI'
import { extratoLista } from "../../info";
import Items from "../Items";

const Extrato = () => {
    return(
        <Box>
            {
                extratoLista.updates.map((update) => {
                    return (
                        <Items 
                            key={update.id} 
                            type={update.type}
                            from={update.from}
                            value={update.value}
                            date={update.date}
                        />
                    )
                })
            }
            <Botao>Ver mais</Botao>
        </Box>
    )
}
export default Extrato