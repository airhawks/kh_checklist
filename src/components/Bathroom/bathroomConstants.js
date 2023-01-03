import AccessoriesImage from "../../../assets/bathroom/Accesories.jpg";
import ConernerShowerEnclosureImage from "../../../assets/bathroom/Corner-shower-enclosure.jpeg";
import GlassPartitionImage from "../../../assets/bathroom/Glass-Partition.jpg";
import ShowerEnclosureImage from "../../../assets/bathroom/Shower-Enclosure.jpg";
import WallToWallShowerEnclosureImage from "../../../assets/bathroom/Wall-to-wall-shower-enclosure.jpeg";
import ConcealedFlushingSystemImage from "../../../assets/bathroom/concealed-flushing-system.jpeg";
import FloorMountedWCImage from "../../../assets/bathroom/floor-mounted-wc.jpg";
import FlushingSystemImage from "../../../assets/bathroom/flushing-system.jpg";
import LayoutBathroomRectangleImage from "../../../assets/bathroom/layout-bathroom-rectangle.jpg";
import LayoutBathroomLShapeImage from "../../../assets/bathroom/layout-bathroom-shape-L-shape.jpg";
import LayoutBathroomSquareImage from "../../../assets/bathroom/layout-bathroom-shape-square.jpg";
import MirrorVanityImage from "../../../assets/bathroom/mirror-vanity.jpg";
import MixerImage from "../../../assets/bathroom/mixer.jpg";
import ShowerPanelImage from "../../../assets/bathroom/shower-panel.jpg";
import ShowerImage from "../../../assets/bathroom/shower.jpg";
import VisibleFlushingSystemImage from "../../../assets/bathroom/visible-flushing-system.jpeg";
import WallMountedWCImage from "../../../assets/bathroom/wall-mounted-wc.jpg";
import WashBasinImage from "../../../assets/bathroom/wash-basin.jpg";
import WCImage from "../../../assets/bathroom/wc.jpg";

export const BathroomLevelOfWorkOptions = ["Partial work", "Complete redo"];

export const BathroomTypeOfWorkOptions = [
  "Breaking",
  "Civil Work",
  "New Flooring",
  "Electrical",
  "False Ceiling",
  "Painting",
  "Plumbing",
  "Waterproofing"
];

export const BathroomShapeOptions = {
  "Rectangle Shape": {
    label: "Rectangle Shape",
    src: LayoutBathroomRectangleImage
  },
  "Square Shape": { label: "Square Shape", src: LayoutBathroomSquareImage },
  "L Shape": { label: "L Shape", src: LayoutBathroomLShapeImage }
};

export const BathroomNewWorkOptions = {
  WCShower: { label: "WCShower", src: WCImage },
  Shower: { label: "Shower", src: ShowerImage },
  "Mirror with Vanity": { label: "Mirror with Vanity", src: MirrorVanityImage },
  "Glass Partition": { label: "Glass Partition", src: GlassPartitionImage },
  Mixer: { label: "Mixer", src: MixerImage },
  "Wash basin": { label: "Wash basin", src: WashBasinImage },
  "Flushing system": { label: "Flushing system", src: FlushingSystemImage },
  "Shower Panel": { label: "Shower Panel", src: ShowerPanelImage },
  "Shower Enclosure": { label: "Shower Enclosure", src: ShowerEnclosureImage },
  Accesories: { label: "Accesories", src: AccessoriesImage }
};

export const BathroomShowerEnclosureOptions = {
  "Wall to wall shower enclosure": {
    label: "Wall to wall shower enclosure",
    src: WallToWallShowerEnclosureImage
  },
  "Corner shower enclosure": {
    label: "Corner shower enclosure",
    src: ConernerShowerEnclosureImage
  }
};

export const BathroomCommodesOptions = {
  "Wall mounted wc": { label: "Wall mounted wc", src: WallMountedWCImage },
  "Floor mounted wc": { label: "Floor mounted wc", src: FloorMountedWCImage }
};

export const BathroomFlushingSystemOptions = {
  "Visible - PVC Flush tank": {
    label: "Visible - PVC Flush tank",
    src: VisibleFlushingSystemImage
  },
  "Concealed (hidden inside wall)": {
    label: "Concealed (hidden inside wall)",
    src: ConcealedFlushingSystemImage
  }
};
