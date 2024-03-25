import React, { useEffect } from 'react';
import { vec2, add, scale, flatten } from 'gl-matrix';

const WebGLGasket = () => {
    useEffect(() => {
        let gl;
        let points;
        const NumPoints = 15000;

        function getRandomArbitrary(min, max) {  
            return Math.random() * (max - min) + min;  
        }

        const init = () => {
            const canvas = document.getElementById("gl-canvas");
            gl = canvas.getContext("webgl");

            if (!gl) {
                alert("WebGL isn't available");
                return;
            }

            const vertices = [
                vec2.fromValues(-1, 1),
                vec2.fromValues(1, 1),
                vec2.fromValues(0, -1)
            ];

            let u = add(vertices[0], vertices[1]);
            let v = add(vertices[0], vertices[2]);
            let p = scale(0.25, add(u, v));

            points = [p];

            for (let i = 0; points.length < NumPoints; ++i) {
                const j = Math.floor(Math.random() * 3);
                p = add(points[i], vertices[j]);
                p = scale(getRandomArbitrary(0.5, 0.425), p);
                points.push(p);
            }

            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.clearColor(1.0, 1.0, 1.0, 0.0);

            const vertexShaderSource = `
                attribute vec4 vPosition;
                void main() {
                    gl_PointSize = 0.1;
                    gl_Position = vPosition;
                }
            `;
            const fragmentShaderSource = `
                precision mediump float;
                void main() {
                    gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
                }
            `;

            const vertexShader = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(vertexShader, vertexShaderSource);
            gl.compileShader(vertexShader);

            const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(fragmentShader, fragmentShaderSource);
            gl.compileShader(fragmentShader);

            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);

            const bufferId = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
            gl.bufferData(gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW);

            const vPosition = gl.getAttribLocation(program, "vPosition");
            gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(vPosition);

            render();
        };

        const render = () => {
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.drawArrays(gl.POINTS, 0, points.length);
        };

        init();

        // Cleanup function
        return () => {
            // Cleanup WebGL resources if needed
        };
    }, []);

    return <canvas id="gl-canvas" width="812" height="812" style={{ width: '100%', height: '100%'}}>Oops ... your browser doesn't support the HTML5 canvas element</canvas>;
};

export default WebGLGasket;
