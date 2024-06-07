import { TVPlayer, useTVPlayerStore, TVPlayerButtonProps } from "./lib";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

// locally testing built library
//import { TVPlayer, useTVPlayerStore, TVPlayerButtonProps } from "./..";

export type MediaType = {
  url: string | string[] | MediaStream;
  title?: string;
  subTitle?: string;
  preview?: string | boolean;
};

const mediaList: MediaType[] = [
  {
    url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_qp_16.m3u8",
    title: "TV5 HD",
    subTitle: "Watch TV5 Online",
    preview: true,
  },
  {
    url: "https://ythls.armelin.one/channel/UCE2606prvXQc_noEqKxVJXA.m3u8",
    title: "ABS-CBN News Channel",
    subTitle: "Watch ANC Online",
    preview:
      "https://i.imgur.com/odwRbRk.png",
  },
  {
    title: "GMA 7",
    subTitle: "Watch GMA TV Channel 7 Online",
    url: "https://ythls.armelin.one/channel/UCKL5hAuzgFQsyrsQKgU0Qng.m3u8",
    preview:
      "https://i.imgur.com/uAqFMLy.png",
  },
];

function App() {
  const actions = useTVPlayerStore((s) => s.actions);
  const mediaIndex = useTVPlayerStore((s) => s.mediaIndex) || 0;
  const likeToggle = useTVPlayerStore((s) => s.likeToggle);

  const customButtons: TVPlayerButtonProps[] = [
    { action: "loop", align: "left" },
    { action: "like", align: "left" },
    { action: "previous", align: "center" },
    { action: "playpause", align: "center" },
    { action: "next", align: "center" },
    { action: "mute", align: "right" },
    {
      action: "custom",
      align: "right",
      label: "About",
      faIcon: faGithub,
      onPress: () => {
        window.location.href = "https://github.com/lewhunt/react-tv-player";
      },
    },
  ];

  const handleLike = () => {
    console.log("like button pressed");
    // custom app logic for like
    actions.setLikeToggle(!likeToggle);
  };

  return (
    <>
      <TVPlayer
        title={mediaList[mediaIndex].title}
        subTitle={mediaList[mediaIndex].subTitle}
        url={mediaList[mediaIndex].url}
        light={mediaList[mediaIndex].preview}
        customButtons={customButtons}
        mediaCount={mediaList.length}
        mediaIndex={0}
        onLikePress={handleLike}
        playsinline={true}
        hideControlsOnArrowUp={true}
      />
    </>
  );
}

export default App;
