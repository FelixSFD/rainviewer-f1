import {TileLayer} from "leaflet";

export class LayerCacheItem {
  constructor(public timestamp: number, public layer: TileLayer) {
  }
}
