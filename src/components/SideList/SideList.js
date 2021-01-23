import React, { useContext } from "react";
import Style from "./SideList.module.scss";
import { Store } from "../../store/index";

import { SideListItem } from "../SideListItem/SideListItem";
export const SideList = () => {
  const { globalState } = useContext(Store);
  return (
    <div className={Style.sidenav}>
      {globalState.related ? (
        globalState.related.map((video) => {
          console.log(video.snippet.thumbnails);
          return (
            <SideListItem
              id={video.id.videoId}
              key={video.id.videoId}
              src={video.snippet.thumbnails}
              title={video.snippet.title}
            />
          );
        })
      ) : (
        <span>no data</span>
      )}
    </div>
  );
};
