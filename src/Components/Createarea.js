import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";

function CreateArea({ add2Note }) {
  const [titleNcontent, setTitleNcontent] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  // const [isFocused, setIsFocused] = useState({
  //   title: false, content: false
  // });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setTitleNcontent((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleClick = function (evt) {
    evt.preventDefault();
    add2Note(titleNcontent);
    setTitleNcontent({
      title: "",
      content: "",
    });
  };

const handleExpansion = _ => setIsExpanded(true);

// const handleFocus = evt => {
//   const {name} = evt.target;

// }

  return (
    <div>
      <form className="create-note">
{isExpanded && <input onChange={handleChange} name="title" value={titleNcontent.title} placeholder="Title" />}
<textarea onClick={handleExpansion} rows={isExpanded ? "3" : '1'} onChange={handleChange} name="content" value={titleNcontent.content} placeholder="Take a note..." />
      {isExpanded && <Zoom in={true}>
        <Fab onClick={(evt) => handleClick(evt)}>
              <AddIcon />
        </Fab>
        </Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;
