import React, { useState, useEffect } from 'react';
import {
    Box,
    Flex,
    Container,
    Text,
  } from 'theme-ui';

import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import Layout from 'components/layout';
import Verificacion from 'sections/verificacion';
import Error from 'sections/error';

import { useRouter } from 'next/router'

import axios from 'axios'

export default function IndexPage() {
    
    const router = useRouter()
    
    const [ verificacion, setVerificacion ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const idVerificacion =  router.query.idVerificacion

    const fetchData =  () => {
        let url = `https://aula-virtual-ccitec.herokuapp.com/verifications?_limit=1000000`
    
        axios.get(url)
            .then(res=>{
                setVerificacion(res.data)        
                setLoading(!loading)      
            })
    }

    useEffect(() => { 
        fetchData()
    },[])

    for(var i=0; i < verificacion.length; i++){
        if(idVerificacion == verificacion[i].code || idVerificacion == `?search=${verificacion[i].code}`){
            return(
                <ThemeProvider theme={theme}>
                    <StickyProvider>
                        <Layout>
                            <Verificacion data={verificacion[i].url}/>  
                        </Layout>
                    </StickyProvider>
                </ThemeProvider>
            )
        }
    }
    
    return (
        <>
        { loading == false ?
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <Error/>  
                </Layout>
            </StickyProvider>
        </ThemeProvider>
        :
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <Text>
                        Cargando...
                    </Text> 
                </Layout>
            </StickyProvider>
        </ThemeProvider>
        }
        </>
    )
}