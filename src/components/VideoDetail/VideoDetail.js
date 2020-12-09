import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom"; //現在のパスやサーチパラメータなどを取得することができる
import Linkify from "react-linkify";
import Style from "./VideoDetail.module.scss";
import { fetchSelectedData } from "../../apis";
import { Store } from "../../store/index";
import { VideoPlay } from "../VideoPlay/VideoPlay";

const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation(); //Linkのpathやsearchの情報取得
  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search); //stringであるlocation.searchをデータを取得しやすいようにオブジェクトに変更する
    const id = searchParams.get("v");
    fetchSelectedData(id).then((res) => {
      const item = res.data.items.shift(); //shift()がないと配列で受けとってしまう。これは一つのitemなので配列である意味はない。
      setGlobalState({ type: "SET_SELECTED", payload: { selected: item } });
    });
  };

  useEffect(() => {
    setSelectedVideo();
    // eslint-disable-next-line
  }, [location.search]); //useEffect内では直接asyncfunctionを書けない
  return globalState.selected && globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkify>
        <pre>{globalState.selected.snippet.description}</pre>
      </Linkify>
    </div> //pre=整形ずみのスタイルを使用したい時
  ) : (
    <span>no data</span>
  );
};

export default VideoDetail;
