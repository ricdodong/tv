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
    preview: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/TV5_HD_Logo_2023.svg/2560px-TV5_HD_Logo_2023.svg.png",
  },
    {
    url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/onesportsplushd_qp_3.m3u8",
    title: "OneSports+",
    subTitle: "Watch OneSports+ Online",
    preview: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/OneSportsPlus_logo.svg/200px-OneSportsPlus_logo.svg.png",
  },
  {
    url: "https://teleradyo-abscbn-ono.amagi.tv/playlist360_p.m3u8",
    title: "TeleRadyo 630",
    subTitle: "Watch TeleRadyo Online",
    preview: "https://upload.wikimedia.org/wikipedia/en/archive/2/2e/20231130051829%21TeleRadyo_Serbisyo_logo.svg",
  },
  {
    url: "https://cinemo-abscbn-ono.amagi.tv/playlist.m3u8",
    title: "Cinemo",
    subTitle: "Watch Cinemo Online",
    preview: "https://upload.wikimedia.org/wikipedia/en/2/2b/Cinemo_logo_vectorized.svg",
  },
  {
    url: "https://ancglobal-abscbn-ono.amagi.tv/playlist720_p.m3u8",
    title: "ANC HD",
    subTitle: "Watch ANC Online",
    preview:
      "https://i.imgur.com/odwRbRk.png",
  },
  {
    title: "Nat GEO Wild",
    subTitle: "Watch Nat Geo Wild Online",
    url: "https://www.youtube.com/watch?v=PLR6KdmyTho",
    preview:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xOxWV6XocICAaQtAT4ssCUAjynmil6dTfORkVCel_Q&s",
  },
  {
    title: "Outdoor Channel",
    subTitle: "Watch Outdoor Channel Online",
    url: "https://amg00718-outdoorchannela-outdoortvnz-samsungnz-lylq4.amagi.tv/playlist/amg00718-outdoorchannela-outdoortvnz-samsungnz/cb5738176573618884c83c62cef44282847b3dcb0e6c886470af4a9765d97800dbe8ae84ae5b910c4c9e1fc061017d360439cd1dd56c49c1da63b820743c4b21fdcde00080dd0d0cb1df11292ca36265299a7369cc350f7bd2ec5a2f803ebe764c53cb017c593f88f258af734cc59e0a957f39e8fc8b307b24455a9c5a43e6a64cb7ade909478938f4e20149c07910fa83439c8201ea8580528343d374a5169fc0f38bd6148ae43f5293728aecdb5f581fa9a83bf8f955bfd6937929957f2d556c3a8cc1b2cd3ef702da21269cded8b664857ca661af89125e98059a5ac413837fb34bdd89b44806d8ad20116edeab786429b4f7a186bb033aae67e2a3fa9f08147e7c1c0a24ea48fa585b0882f2dd1d8ac010d6b925c5976c1f2d8af72fffcbe2d3bfe2cf220846bb369b826b89b027247b18e9ba132b4217fd32c3ef00285d0269ac945cc887e393510840ab8f44dd1f17b894decd8f4e73fd69155ee777ca1b2b588c653c32b576b9ad3562df7251c52d6baf1175a152ecb429c2a2d9ce0f2ffa8b9415b13cb9f542f9de36844170190ebaf9291f62497edbe12f4d1371d14ae9d685b0255c4ebcb99db090130b063f164005c4b7b427d5dd965b687cab642f6e701f0085448739ad6767346e984e9dfc7337ef600622e9a03358201cb5c0a38e8ad38a09f548dac1f93638281b049936162d7adca6873aac6c1e661b1d7b1efddf43d85fd217674592a7a176/145/1920x1080_5287612/index.m3u8",
    preview:
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/Outdoor_Channel_logo_2017.svg",
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
        window.location.href = "https://ricdodong.github.io/tv";
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
