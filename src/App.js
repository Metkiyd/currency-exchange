import './styles.css';
import { MyButton} from "./components/MyButton";
import {MyCheckbox} from "./components/MyCheckbox";
import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';

function App() {
  return (
    <div className="App">
      <MyButton size="small" variant="contained" disabled > Call to Action</MyButton>
      <MyButton size="small" variant="contained" color='error'>Call to Action</MyButton>
      <MyButton size="small" variant="contained" endIcon={<PlaylistAddCheckRoundedIcon/>} >Call to Action</MyButton>
      <MyButton size="medium" variant="contained">Call to Action</MyButton>
      <MyButton size="large" variant="contained">Call to Action</MyButton>
      <MyButton size="small" variant="outlined" endIcon={<ExitToAppRoundedIcon/>}>Call to Action</MyButton>
      <MyButton size="medium" variant="outlined" startIcon={<WorkOutlineOutlinedIcon/>}>Call to Action</MyButton>
      <MyButton size="large" variant="outlined" startIcon={<SyncAltRoundedIcon/>}>Call to Action</MyButton>

      <MyButton size="small" variant="outlined" endIcon={<PersonOutlineOutlinedIcon/>}></MyButton>
      <MyButton size="medium" variant="outlined" startIcon={<LeaderboardOutlinedIcon/>}></MyButton>
      <MyButton size="large" variant="outlined" startIcon={<CachedRoundedIcon/>}></MyButton>

      <MyButton size="medium" variant="contained" startIcon={<ChevronLeftOutlinedIcon/>}></MyButton>
      <MyButton size="large" variant="contained" endIcon={<ChevronRightOutlinedIcon/>}></MyButton>

      <MyCheckbox label="1" />
      <MyCheckbox defaultChecked label="2" />
      <MyCheckbox disabled label="3" />


    </div>
  );
}

export default App;
