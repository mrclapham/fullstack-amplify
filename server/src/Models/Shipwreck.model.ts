import mongoose, { Schema, model } from 'mongoose';
/**
 * 
 * {
  "recrd": "",
  "vesslterms": "",
  "feature_type": "Wrecks - Visible",
  "chart": "US,U1,graph,DNC H1409860",
  "latdec": 9.3547792,
  "londec": -79.9081268,
  "gp_quality": "",
  "depth": 0,
  "sounding_type": "",
  "history": "",
  "quasou": "",
  "watlev": "always dry",
  "coordinates": [
    -79.9081268,
    9.3547792
  ]
}
 */

const ShipwrecksSchema = new Schema({
  recrd: {
    type: String,
    required: true
  },
  vesslterms: {
    type: String,
    required: true
  },
  feature_type: {
    type: String,
    required: true
  },
  chart: {
    type: String,
    required: true
  },
  latdec: {
    type: Number,
    required: true
  },
  londec: {
    type: Number,
    required: true
  },
  gp_quality: {
    type: String,
    required: true
  },
  depth: {
    type: Number,
    required: true
  },
  sounding_type: {
    type: String,
    required: true
  },
  history: {
    type: String,
    required: true
  },
  quasou: {
    type: String,
    required: true
  },

  watlev: {
    type: String,
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

export const shipwrecks = mongoose.model('shipwrecks', ShipwrecksSchema);
