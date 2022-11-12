import {
    Box,
    Flex,
    Container,
    Text,
  } from 'theme-ui';
  
import React from 'react';
import BannerTextLine from 'assets/banner-text-line.png';
  
const Verificacion = ( data ) => {

    return (
        <Box sx={styles.banner}>
            <Container sx={styles.banner.container}>
                <Flex sx={styles.banner.row} >
                    <Box sx={styles.banner.col} >
                        <Box sx={styles.banner.content} >
                            <Text as="h3">
                                ¡Felicidades!
                            </Text>
                            <Text as="p">
                                Este diploma/certificado esta verificado
                            </Text>
                        </Box>
                    </Box>
                </Flex>
                <Flex sx={styles.banner.row}>
                    <iframe src={data.data} width="1450px" height="830px"></iframe>
                </Flex>
            </Container>
        </Box>
    );
};

export default Verificacion;

const styles = {
    banner: {
      overflowX: 'hidden',
      paddingTop: ['100px', '120px'],
      paddingBottom: ['0px', null, '80px'],
      container: {
        maxWidth: ['100%', null, null, null, null, '1240px', '1440px'],
      },
      row: {
        flexWrap: 'wrap',
        display: 'flex',
        marginLeft: '-15px',
        marginRight: '-15px',
      },
      col: {
        pl: '15px',
        pr: '15px',
        flex: ['1 1 100%', null, '0 0 100%'],
      },
      content: {
        paddingRight: [0, 0, 0, 0, '40px', 0, 0],
        h3: {
          lineHeight: 1.18,
          color: 'black',
          fontWeight: 'bold',
          position: 'relative',
          width: '100%',
          fontSize: ['28px', '35px', null, '45px', null, '50px', '85px'],
          maxWidth: ['500px', null, null, null, null, null, '100%'],
          '&:before': {
            content: '""',
            width: ['290px', null, null, null, null, '260px', '381px'],
            height: '15px',
            backgroundImage: `url(${BannerTextLine})`,
            backgroundPosition: 'center center',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            bottom: '-15px',
            right: ['15px', null, null, null, null, '140px', '100px'],
            display: ['none', null, null, null, null, 'block'],
          },
        },
        p: {
          lineHeight: 2.33,
          color: '#02073E',
          marginTop: ['10px', null, null, '35px'],
          fontSize: ['15px', '18px'],
          pr: ['15px', 0],
          br: {
            display: ['none', null, null, null, null, 'block'],
          },
        },
      },
      stars: {
        marginTop: ['0', null, null, null, null, '40px'],
        marginBottom: '20px',
        display: 'flex',
        color: '#02073E',
        fontSize: ['15px'],
        alignItems: 'center',
        lineHeight: 1,
        svg: {
          color: 'primary',
          '+svg': {
            marginLeft: ['3px', null, '5px'],
          },
          '&:last-of-type': {
            marginRight: '10px',
          },
        },
      },
   
    },
  };