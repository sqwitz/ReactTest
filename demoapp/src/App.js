import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Header, Icon, Grid, Input, Container, Label, Button, Sidebar, Menu, Table } from 'semantic-ui-react'


function App() {
  const [commit, setCommit] = useState(0)

  const [author, setAuthor] = useState('anonymous')
  const [files, setFiles] = useState(["node modules", "test", "build", "package.json", "GruntFile.js"])

  const filesInCommit = () => {
    let listOfFiles = []
    files.map(file => {
      listOfFiles.push(
        <Table.Row>
          <Table.Cell>
            <Icon name='file outline' /> {file}
        </Table.Cell>
          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
        </Table.Row>
      )

    })
    return (
      listOfFiles

    )
  }
  useEffect(() => {
    fetchCommit()
  }, [])

  const fetchCommit = async () => {
    const commits = await fetch("https://api.github.com/repos/sqwitz/ReactTest/commits")
    const data = await commits.json()
    setAuthor(JSON.parse(JSON.stringify(data[0].commit)).author.name)
    setCommit(data[0])

  }
  return (
    <Container fluid>
      <Segment inverted>
        <Header>
          <Grid>
            <Grid.Row columns='16'>
              <Grid.Column width={1}>
                <Icon name="github" size="large" />
              </Grid.Column>
              <Grid.Column width={3}>
                <Input placeholder="Search or jump to..." />
              </Grid.Column>
              <Grid.Column width={2}>
                <a href="#">Pull requests</a>
              </Grid.Column>
              <Grid.Column width={1.5}>
                <a href="#">Issues</a>
              </Grid.Column>
              <Grid.Column width={2}>
                <a href="#">Marketplace</a>
              </Grid.Column>
              <Grid.Column width={2}>
                <a href="#">Explore</a>
              </Grid.Column>
              <Grid.Column width={2}>
                <a href="#"><Icon name="bell" size="small" /></a>
              </Grid.Column>
              <Grid.Column width={2}>
                <a href="#"><Icon name="plus" size="small" /></a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Header>
      </Segment>
      <Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column width={1}>
              <Icon name="clipboard outline" size="tiny" />
            </Grid.Column>
            <Grid.Column width={2}>
              <Label>sqwitz / ReactTest</Label>
            </Grid.Column>
            <Grid.Column width={4}></Grid.Column>
            <Grid.Column width={3}>
              <Button>
                <Icon name="eye" size="small" />
                <Label>Unwatch</Label>
                <Icon name="arrow circle down" size="small" />
              </Button>
              <a href="#">1</a>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button>
                <Icon name="star" size="small" />
                <Label>star</Label>
              </Button>
              <a href="#">0</a>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button>
                <Icon name="fork" size="small" />
                <Label>fork</Label>
              </Button>
              <a href="#">0</a>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Button>
              <Label>Branch: master
                <Icon name="arrow down" size="small" />
              </Label>
            </Button>
          </Grid.Row>
          <Grid.Row inverted>
            <Grid.Column width={3}></Grid.Column>
            <Label>Commits on Jan 4, 2020</Label>
          </Grid.Row>
          <Grid.Column width={5}></Grid.Column>
          <Segment>
            <Grid.Row inverted>
              <Label>Initial Commit <br />
                sqwitz committed 2 days ago</Label>
              <Button>Verify</Button>
              <Button><Icon name="clipboard outline" size="tiny" /></Button>
              <Button>126703c</Button>
              <Button><Icon name="arrow left" /><Icon name="arrow right" /></Button>
            </Grid.Row>
          </Segment>
          <Grid.Row>
            <Grid.Column width={7}></Grid.Column>

            <Button>Newer</Button>
            <Button>Older</Button>
          </Grid.Row>
        </Grid>
      </Segment>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              {
                commit ? (JSON.parse(JSON.stringify(commit.commit)).author.name) : 'anonymous'
              }
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {filesInCommit()}
        </Table.Body>
      </Table>

    </Container>


  )
}


export default App;
