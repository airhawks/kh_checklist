import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { Status } from "../../constants";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import {
  addWindow,
  onDeleteWindow,
  setWindowValues,
} from "../../store/curtainSlice";
import CurtainEditor from "./CurtainEditor";
import * as React from "react";

function WindowStatus({
  windowName,
  status,
  onClickEdit,
  onClickViewSummary,
  onDeleteWindow,
}) {
  return (
    <>
      <Box sx={{ m: 2 }}>
        <Typography variant="h6" component="div">
          {windowName}
        </Typography>
        {status === Status.Empty ? (
          <Button onClick={onClickEdit}>Start Planning</Button>
        ) : (
          <>
            <Button onClick={onClickEdit}>
              {status === Status.Started ? "Continue Editing" : "Edit Style"}
            </Button>
            <Button onClick={onClickViewSummary}>View Summary</Button>
          </>
        )}

        <Button onClick={onDeleteWindow}>Delete</Button>
      </Box>
      <Divider />
    </>
  );
}

export default function CurtainDashboard({}) {
  const [currentlyEditing, setCurrentlyEditing] = React.useState(false);

  const windows = useSelector((state) => state.curtain.windows);
  const dispatch = useDispatch();

  return currentlyEditing !== false ? (
    <CurtainEditor
      windowData={windows[currentlyEditing]}
      onCompleted={() => setCurrentlyEditing(false)}
      currentlyEditing={currentlyEditing}
    />
  ) : (
    <Box sx={{ width: 1, flex: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography variant="h5">Windows</Typography>
        <Box sx={{ flex: "1 1 auto" }} />

        <Button onClick={() => dispatch(addWindow())}>Add Window</Button>
      </Box>
      <Divider
        sx={{
          mb: 4,
        }}
      />
      {windows.map(({ windowName, status }, index) => (
        <WindowStatus
          key={index + windowName}
          windowName={windowName}
          status={status}
          onClickEdit={() => setCurrentlyEditing(index)}
          onClickViewSummary={() => {}}
          onDeleteWindow={() => dispatch(onDeleteWindow(index))}
        />
      ))}
    </Box>
  );
}
