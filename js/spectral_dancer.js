/*
   Based on SpectrumBox - A JavaScript spectral analyzer.
   Mohit Cheppudira - 0xfe.blogspot.com
   ======================================
   MODIFIED BY Nemesis Fixx for the "Spectral Dancer"
*/

/**
  @constructor
  Create an n-point FFT based spectral dancer.

  @param num_points - Number of points for transform.
  @param num_bins - Number of bins to show on canvas.
  @param audio_context - An AudioContext instance.
  @param default_structure - the default limb structure of the dancer
  @param posture - a function to take the current dancer's limb structure and make a new posture from it
  @param stroke_generator - a function that knows how to take the default stroke and make a new stroke from it in the certain dance style
  @param update_rate_ms - rate at which to update the strokes in microsecs
*/
SpectralDancer = function(num_points, num_bins, audio_context, default_structure, posture, stroke_generator, update_rate_ms) {
  this.init(num_points, num_bins, audio_context, default_structure, posture, stroke_generator, update_rate_ms);
}

SpectralDancer.Types = {
  FREQUENCY: 1,
  TIME: 2
}

SpectralDancer.prototype.init = function(
    num_points, num_bins, audio_context, default_structure, posture, stroke_generator, update_rate_ms) {
  this.num_bins = num_bins;
  this.num_points = num_points;
  this.update_rate_ms = update_rate_ms;
  this.smoothing = 0.75;
  this.type = SpectralDancer.Types.FREQUENCY;

  // Number of points we actually want to display. If zero, display all points.
  this.valid_points = 0;

  this.actx = audio_context;

  // Create the spectral analyzer
  this.fft = this.actx.createAnalyser();
  this.fft.fftSize = this.num_points;
  this.data = new Uint8Array(this.fft.frequencyBinCount);

  //default limb struct for the dancer
  this.default_limb_structure = default_structure;
  this.posture = posture;
  this.stroke_generator = stroke_generator;
  this.posture(this.default_limb_structure); //initially, our dancer is in the default posture
}

/* Returns the AudioNode of the FFT. You can route signals into this. */
SpectralDancer.prototype.getAudioNode = function() {
  return this.fft;
}

/* Set the number of points to work with. */
SpectralDancer.prototype.setValidPoints = function(points) {
  this.valid_points = points;
  return this;
}

/*clone an object*/
SpectralDancer.prototype.clone = function (obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = this.clone(obj[attr]);
        }
        return copy;
}

throw new Error("Unable to copy obj! Its type isn't supported.");
}

/*Return a clone of the default stroke */
SpectralDancer.prototype.clone_default_stroke = function() {
    return this.clone(this.default_limb_structure);
}


/* Enable the analyzer. Starts making the dancer do their thing! */
SpectralDancer.prototype.enable = function() {
  var that = this;
  if (!this.intervalId) {
    this.intervalId = window.setInterval(
        function() { that.update(); }, this.update_rate_ms);
  }
  return this;
}

/* Disable the analyzer. Stops dancer from grooving, restores to the default stroke */
SpectralDancer.prototype.disable = function() {
  if (this.intervalId) {
    window.clearInterval(this.intervalId);
    this.intervalId = undefined;
  }
  this.posture(this.default_limb_structure); //return dancer to the default stroke ;-)
  return this;
}

/* Updates the canvas display. */
SpectralDancer.prototype.update = function() {
  // Get the frequency samples
  data = this.data;
  if (this.type == SpectralDancer.Types.FREQUENCY) {
    this.fft.smoothingTimeConstant = this.smoothing;
    this.fft.getByteFrequencyData(data);
  } else {
    this.fft.smoothingTimeConstant = 0;
    this.fft.getByteFrequencyData(data);
    this.fft.getByteTimeDomainData(data);
  }

  var length = data.length;
  if (this.valid_points > 0) length = this.valid_points;

  // Break the samples up into bins
  var bin_size = Math.floor(length / this.num_bins);
  for (var i=0; i < this.num_bins; ++i) {
    var sum = 0;
    for (var j=0; j < bin_size; ++j) {
      sum += data[(i * bin_size) + j];
    }

    // Calculate the average frequency of the samples in the bin
    var average = sum / bin_size;

    //Update the Dancer...
    if(average >= 0)
        this.posture(this.stroke_generator(this.clone(this.default_limb_structure), average));
  }
}
