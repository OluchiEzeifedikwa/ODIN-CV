import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GeneralInformation from './components/generalInformation'
import EducationalExperience from './components/educationalexperience'
import Clock from './components/educationalexperience'
import PracticalExperience from './components/practicalexperience'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInformation />
    <EducationalExperience />
    <PracticalExperience />
    <Clock />
    <App />
  </StrictMode>,
)
