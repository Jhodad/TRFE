import React from 'react'
import './App.css'
import Stack from '@mui/material/Stack'

import WidgetList from './components/WidgetList'
import WidgetByName from './components/WidgetByName/WidgetByName'
import WidgetByNameDelete from './components/WidgetByNameDelete/WidgetByNameDelete'
import WidgetCreation from './components/WidgetCreation/WidgetCreation'
import WidgetUpdateDescription from './components/WidgetUpdateDescription/WidgetUpdateDescription'
import WidgetUpdatePrice from './components/WidgetUpdatePrice/WidgetUpdatePrice'

const App = () => {
  return (
    <Stack>

      <WidgetList></WidgetList>

      <WidgetByName></WidgetByName>

      <WidgetByNameDelete></WidgetByNameDelete>

      <WidgetCreation></WidgetCreation>

      <WidgetUpdateDescription></WidgetUpdateDescription>

      <WidgetUpdatePrice></WidgetUpdatePrice>

    </Stack>)
}

export default App
