import React from 'react'
import { Grid, Menu, Header } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const SettingsNav = () => {
  return (
        <Grid.Column width={4}>
          <Menu vertical>
            <Header icon="user" attached inverted color="grey" content="Profile" />
            <Menu.Item as={NavLink} to='../Settings/basic'>Basics</Menu.Item>
            <Menu.Item as={NavLink} to='../Settings/about'>About Me</Menu.Item>
            <Menu.Item as={NavLink} to='../Settings/photos'>My Photos</Menu.Item>
          </Menu>
          <Grid.Row />
          <Menu vertical>
            <Header
              icon="settings"
              attached
              inverted
              color="grey"
              content="Account"
            />
            <Menu.Item as={NavLink} to='../Settings/account'>My Account</Menu.Item>
          </Menu>
        </Grid.Column>
  )
}

export default SettingsNav
