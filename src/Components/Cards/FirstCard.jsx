import {
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

// ✅ Reusable particle background
const ParticleBackground = ({
  particleCount = 800,
  particleSize = 2,
  gravity = 3000,
  damping = 0.5,
  noise = 0.1,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    // Particle arrays
    const pos = new Float32Array(particleCount * 2);
    const vel = new Float32Array(particleCount * 2);

    // init
    for (let i = 0; i < particleCount; i++) {
      pos[i * 2] = Math.random() * w;
      pos[i * 2 + 1] = Math.random() * h;
      vel[i * 2] = (Math.random() - 0.5) * 0.5;
      vel[i * 2 + 1] = (Math.random() - 0.5) * 0.5;
    }

    const cursor = { x: w / 2, y: h / 2 };
    window.addEventListener("pointermove", (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    });

    function draw() {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "rgba(148,226,20,0.6)";
      for (let i = 0; i < particleCount; i++) {
        let ix = i * 2;
        let x = pos[ix],
          y = pos[ix + 1];
        let vx = vel[ix],
          vy = vel[ix + 1];

        let dx = cursor.x - x;
        let dy = cursor.y - y;
        let r2 = dx * dx + dy * dy || 1;
        let a = gravity / r2;
        if (a > 200) a = 200;
        let invR = 1 / Math.sqrt(r2);
        vx += dx * invR * a * 0.05;
        vy += dy * invR * a * 0.05;

        vx += (Math.random() - 0.5) * noise;
        vy += (Math.random() - 0.5) * noise;

        vx *= damping;
        vy *= damping;

        x += vx;
        y += vy;

        if (x < 0) x += w;
        else if (x > w) x -= w;
        if (y < 0) y += h;
        else if (y > h) y -= h;

        pos[ix] = x;
        pos[ix + 1] = y;
        vel[ix] = vx;
        vel[ix + 1] = vy;

        ctx.fillRect(x, y, particleSize, particleSize);
      }
      requestAnimationFrame(draw);
    }
    draw();

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [particleCount, particleSize, gravity, damping, noise]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

const Home = () => {
  return (
    <Flex
      height="100vh"
      justifyContent="flex-end"
      px="10%"
      id="home"
      pt={44}
      pb={36}
      position="relative"
    >
      {/* ✅ Particle background behind everything */}
      <ParticleBackground
        particleCount={5000}
        particleSize={1.5}
        gravity={8000}
        damping={0.8}
        noise={0.1}
      />

      <Flex flex={1} direction="column" color="white" zIndex={1}>
        <Text fontFamily="Roadradio-Bold" fontSize={72}>
          <TypeAnimation
            sequence={[
              "Hello",
              2000,
              "Vanakkam",
              2000,
              "Konechiwa",
              2000,
              "Gumasta",
              1000,
              "Namaste",
              2000,
              "Hola Amigos",
              2000,
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />
          <br />
          I&apos;M <span style={{ color: "#94E214" }}>KEDAR</span>,
          <Text fontSize={36}>Web developer, flutter developer</Text>
        </Text>
        <Text fontSize={18} mt={12} fontWeight={600}>
          Let&apos;s Get In Touch
        </Text>
        <Stack direction="row" fontSize={44} spacing={12} mt={4}>
          <Link href="https://github.com/kedarlin/" isExternal>
            <Icon
              as={FaGithub}
              _hover={{ transform: "scale(1.2)" }}
              transition="transform 0.3s"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/d-kedar" isExternal>
            <Icon
              as={FaLinkedin}
              _hover={{ transform: "scale(1.2)" }}
              transition="transform 0.3s"
            />
          </Link>
          <Link href="https://t.me/kedarling404" isExternal>
            <Icon
              as={FaTelegram}
              _hover={{ transform: "scale(1.2)" }}
              transition="transform 0.3s"
            />
          </Link>
          <Link href="https://wa.me/919677069732" isExternal>
            <Icon
              as={FaWhatsapp}
              _hover={{ transform: "scale(1.2)" }}
              transition="transform 0.3s"
            />
          </Link>
        </Stack>
      </Flex>
      {/* <Flex w="30rem" h="30rem" borderRadius="50%" overflow="hidden" zIndex={1}>
        <Image
          src="/Assets/about-img.jpg"
          alt="profile-img"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Flex> */}
    </Flex>
  );
};

export default Home;
