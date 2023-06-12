import { Button, Container, Table, Text, Card, Col,Row, Input, Spacer } from "@nextui-org/react";
import { StyledBadge } from "./StyledBadge";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSSR } from '@nextui-org/react'
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from 'react-toastify';
import { Loading } from "@nextui-org/react";

const History = ({ inputValue }) => {
  const { isBrowser } = useSSR()
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortenLink(res.data.result.full_short_link);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  const notify = () => toast("Copied to clipboard!");

  return (
    <>
      <main>
        <Container lg>
          <Card variant="bordered" >
            <Card.Body css={{ padding: "$10" }}>
              <Col justify='center' align='center'>
                {
                  (error) ? <Text size={18} weight='bold'>'Please provide valid link..' </Text> :
                    (loading) ? <Loading type='points-opacity' /> :
                    <Text className="bg-black flex justify-center items-center max-w-md rounded-xl font-bold">{shortenLink}</Text>
                    }
                <Spacer x='2' />
                <CopyToClipboard
                  text={shortenLink}
                  onCopy={() => setCopied(true)}
                  onClick={notify}
                >
                  <Button bordered color='secondary' >Copy to Clipboard</Button>
                </CopyToClipboard>
              </Col>
            </Card.Body>
          </Card>
        </Container>
      </main>
    </>
  )
}

export default History;