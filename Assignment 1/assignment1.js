
var vertexShaderText =
[
 'precision mediump float;',
 '',
 'attribute vec2 vertPosition;',
 '',
 'void main()',
 '{',
 ' gl_Position = vec4(vertPosition, 0, 1);',
 '}'
].join('\n');

var RedfragmentShaderText = [
  'precision mediump float;',
  '',
  'void main()',
  '{',
  ' gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);',
  '}'
].join('\n');

var BluefragmentShaderText = [
  'precision mediump float;',
  '',
  'void main()',
  '{',
  ' gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);',
  '}'
].join('\n');

var GreenfragmentShaderText = [
  'precision mediump float;',
  '',
  'void main()',
  '{',
  ' gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);',
  '}'
].join('\n');

var YellowfragmentShaderText = [
  'precision mediump float;',
  '',
  'void main()',
  '{',
  ' gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);',
  '}'
].join('\n');

var InitWebGL = function() {
  console.log("Loading WebGL...");

  var canvas = document.getElementById("gl-canvas");
  var gl = canvas.getContext('webgl');
  var context = canvas.getContext('2d');
  if(!gl)
  {
    gl = canvas.getContext('experimental-webgl');
  }
  if(!gl)
    alert("WebGL not supported.");

    canvas.width = 800;
    canvas.height = 400;

    // background
    gl.clearColor(1, 1, 1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


    // shaders initalization
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var RedfragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    var GreenfragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    var YellowfragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    var BluefragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertexShader, vertexShaderText);
    gl.shaderSource(RedfragmentShader, RedfragmentShaderText);
    gl.shaderSource(YellowfragmentShader, YellowfragmentShaderText);
    gl.shaderSource(GreenfragmentShader, GreenfragmentShaderText);
    gl.shaderSource(BluefragmentShader, BluefragmentShaderText);

    gl.compileShader(vertexShader);

    // error checking to make sure shader compiles correctly
    if(!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      console.error("ERROR compiling vertex shader!", gl.getShaderInfoLog(vertexShader));
      return;
    }

    gl.compileShader(RedfragmentShader);

    // error checking to make sure shader compiles correctly
    if(!gl.getShaderParameter(RedfragmentShader, gl.COMPILE_STATUS)) {
      console.error("ERROR compiling fragment shader!", gl.getShaderInfoLog(RedfragmentShader));
      return;
    }

    gl.compileShader(YellowfragmentShader);

    // error checking to make sure shader compiles correctly
    if(!gl.getShaderParameter(YellowfragmentShader, gl.COMPILE_STATUS)) {
      console.error("ERROR compiling fragment shader!", gl.getShaderInfoLog(YellowfragmentShader));
      return;
    }


    gl.compileShader(GreenfragmentShader);

    // error checking to make sure shader compiles correctly
    if(!gl.getShaderParameter(GreenfragmentShader, gl.COMPILE_STATUS)) {
      console.error("ERROR compiling fragment shader!", gl.getShaderInfoLog(GreenfragmentShader));
      return;
    }


    gl.compileShader(BluefragmentShader);

    // error checking to make sure shader compiles correctly
    if(!gl.getShaderParameter(BluefragmentShader, gl.COMPILE_STATUS)) {
      console.error("ERROR compiling fragment shader!", gl.getShaderInfoLog(BluefragmentShader));
      return;
    }





    var redProgram = gl.createProgram();
    var yellowProgram = gl.createProgram();
    var greenProgram = gl.createProgram();
    var blueProgram = gl.createProgram();
    gl.attachShader(redProgram, vertexShader);
    gl.attachShader(yellowProgram, vertexShader);
    gl.attachShader(greenProgram, vertexShader);
    gl.attachShader(blueProgram, vertexShader);

    gl.attachShader(redProgram, RedfragmentShader);
    gl.attachShader(yellowProgram, YellowfragmentShader);
    gl.attachShader(greenProgram, GreenfragmentShader);
    gl.attachShader(blueProgram, BluefragmentShader);

    gl.linkProgram(redProgram);


    // make sure Programs links correctly
    if(!gl.getProgramParameter(redProgram, gl.LINK_STATUS)) {
      console.error("ERROR linking program!", gl.getProgramInfoLog(redProgram))
      return;
    }

    gl.validateProgram(redProgram);

    if ( !gl.getProgramParameter( redProgram, gl.VALIDATE_STATUS) ) {
      console.error("ERROR validating program!", gl.getProgramInfoLog(redProgram))
      return;
  }

  gl.linkProgram(yellowProgram);


  // make sure Programs links correctly
  if(!gl.getProgramParameter(yellowProgram, gl.LINK_STATUS)) {
    console.error("ERROR linking program!", gl.getProgramInfoLog(yellowProgram))
    return;
  }

  gl.validateProgram(yellowProgram);

  if ( !gl.getProgramParameter( yellowProgram, gl.VALIDATE_STATUS) ) {
    console.error("ERROR validating program!", gl.getProgramInfoLog(yellowProgram))
    return;
}

gl.linkProgram(greenProgram);


// make sure Programs links correctly
if(!gl.getProgramParameter(greenProgram, gl.LINK_STATUS)) {
  console.error("ERROR linking program!", gl.getProgramInfoLog(greenProgram))
  return;
}

gl.validateProgram(greenProgram);

if ( !gl.getProgramParameter( greenProgram, gl.VALIDATE_STATUS) ) {
  console.error("ERROR validating program!", gl.getProgramInfoLog(greenProgram))
  return;
}


gl.linkProgram(blueProgram);


// make sure Programs links correctly
if(!gl.getProgramParameter(blueProgram, gl.LINK_STATUS)) {
  console.error("ERROR linking program!", gl.getProgramInfoLog(blueProgram))
  return;
}

gl.validateProgram(blueProgram);

if ( !gl.getProgramParameter( blueProgram, gl.VALIDATE_STATUS) ) {
  console.error("ERROR validating program!", gl.getProgramInfoLog(blueProgram))
  return;
}

      // end of shaders


    //
    // Create Buffer
    //

    var letterZVertices = [
      // X, Y
      -0.75, 0.2,
      -0.55, 0.2,
      -0.75, 0.0,
      -0.55, 0.0

    ]

    var squareVertices = [
      0.25, -.25,
      .25, .25,
      0.75, 0.25,
      0.75, -0.25
      // 0.25, -.25 // Remove this to get the triangle cut-out for 3rd

    ]

    var BlindsLines = [
      // Line 1
      -0.25, 0.25,
      -0.05, 0.25,
      //

      // Line 2
      -0.25, 0.20,
      -0.05, 0.20,
      //

      // Line 3
      -0.25, 0.15,
      -0.05, 0.15,
      //

      // Line 4
      -0.25, 0.10,
      -0.05, 0.10,
      //

      // Line 5
      -0.25, 0.05,
      -0.05, 0.05
      //
    ]

    var miniTriangles = [
      // Triangle 1
      -0.10,  0.05,
      -0.14, -0.10,
      -0.06, -0.10,

      // Triangle 2
      -0.20, 0.05,
      -0.24, -0.10,
      -0.16, -.10
    ]

    var letterZVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, letterZVertexBuffer);

// static_draw = only drawing once
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(letterZVertices), gl.STATIC_DRAW);

    var positionAttribLocation = gl.getAttribLocation(redProgram, 'vertPosition');
    gl.vertexAttribPointer(
      positionAttribLocation, // Attribute Location
      2, // Number of Elements
      gl.FLOAT, // Type of Elements
      gl.FALSE,
      2 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
      0 // Offset from the beginning of a single vertex to this attribute
    );
    letterZVertexBuffer.itemSize = 2;
    letterZVertexBuffer.numItems = 4;

    gl.enableVertexAttribArray(positionAttribLocation);

    gl.useProgram(redProgram);
    gl.drawArrays(gl.LINE_STRIP, 0, letterZVertexBuffer.numItems);

//////////// Square /////////////////////
    squareVertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(squareVertices), gl.STATIC_DRAW);
    squareVertexPositionBuffer.itemSize = 2;
    squareVertexPositionBuffer.numItems = 4;

    var SqpositionAttribLocation = gl.getAttribLocation(greenProgram, 'vertPosition');
    gl.vertexAttribPointer(
      SqpositionAttribLocation, // Attribute Location
      2, // Number of Elements
      gl.FLOAT, // Type of Elements
      gl.FALSE,
      2 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
      0 // Offset from the beginning of a single vertex to this attribute
    );

    gl.enableVertexAttribArray(SqpositionAttribLocation);


    gl.useProgram(greenProgram);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0,  squareVertexPositionBuffer.numItems);

    //////////// Blinds (Horizontal Lines) /////////////////////
        BlindsVertexPositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, BlindsVertexPositionBuffer);

        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(BlindsLines), gl.STATIC_DRAW);
        BlindsVertexPositionBuffer.itemSize = 2;
        BlindsVertexPositionBuffer.numItems = 10;

        var BlindspositionAttribLocation = gl.getAttribLocation(blueProgram, 'vertPosition');
        gl.vertexAttribPointer(
          BlindspositionAttribLocation, // Attribute Location
          2, // Number of Elements
          gl.FLOAT, // Type of Elements
          gl.FALSE,
          2 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
          0 // Offset from the beginning of a single vertex to this attribute
        );

        gl.enableVertexAttribArray(BlindspositionAttribLocation);


        gl.useProgram(blueProgram);
        gl.drawArrays(gl.LINES, 0,  BlindsVertexPositionBuffer.numItems);

        //////////// Mini Triangles  /////////////////////
            miniTrianglesVertexPositionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, miniTrianglesVertexPositionBuffer);

            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(miniTriangles), gl.STATIC_DRAW);
            miniTrianglesVertexPositionBuffer.itemSize = 2;
            miniTrianglesVertexPositionBuffer.numItems = 6;

            var miniTrianglespositionAttribLocation = gl.getAttribLocation(yellowProgram, 'vertPosition');
            gl.vertexAttribPointer(
              miniTrianglespositionAttribLocation, // Attribute Location
              2, // Number of Elements
              gl.FLOAT, // Type of Elements
              gl.FALSE,
              2 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
              0 // Offset from the beginning of a single vertex to this attribute
            );

            gl.enableVertexAttribArray(miniTrianglespositionAttribLocation);


            gl.useProgram(yellowProgram);
            gl.drawArrays(gl.TRIANGLES, 0,  miniTrianglesVertexPositionBuffer.numItems);


};
