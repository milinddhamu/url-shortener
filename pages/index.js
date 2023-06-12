'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Input, Button, Container, Spacer, Card, Text, Row, Col, Link } from "@nextui-org/react";
import History from '@/Components/History';
import { useState } from 'react';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [ inputValue , setInputValue] = useState("")

  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <>
      <main>
        <Head>
          <title>URL Shortener</title>
          <link rel='icon' href='/favicon.ico'/>
        </Head>
        <Spacer y={1.5} />
        <Container lg>
          <Card variant="bordered">
            <Card.Body css={{ padding: "$10" }}>
              <Spacer x={2} />
              <Col justify='center' align='center'>
                <Text h1 weight='bold' size={40} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} >
                  Shorten your link!   
                </Text>
                <Spacer y={2} />
                <Text size={18}>
                  This is a simple url shortener built with NextUI and Next.js.
                </Text>
                <Spacer y={3} />
                <Row justify='center' align='center'>
                <Input
                  bordered
                  labelPlaceholder="Paste your url here..."
                  color='default'
                  onChange={e => setValue(e.target.value)}
                />
                <Spacer x={1}/>
                <Button bordered color="primary" auto onClick={handleClick} >
                Shorten!
                </Button>
                  </Row>
              </Col>
            </Card.Body>
          </Card>
          <Spacer y={2}/>
        </Container>
          <History inputValue={inputValue}/>
          <span className='m-4 p-4 flex flex-end justify-center  h-full gap-2'>
          <Text>Made with &#128156; by</Text>
              <Link color='secondary' href='https://github.com/milinddhamu' isExternal>milinddhamu</Link>
          </span>
      </main>
    </>
  )
}
