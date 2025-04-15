import { Box, Button, Flex, Text, Divider, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const [backgroundColor, setBackgroundColor] = useState('linear-gradient(to right, rgba(7, 30, 55, 0.9), rgba(7, 30, 55, 0.5))');
  const [headerBoxShadow, setHeaderBoxShadow] = useState('');
  const [contactButtonStyle, setContactButtonStyle] = useState(false);
  const [logoColor, setLogoColor] = useState('white');
  const [itemsColor, setItemsColor] = useState('white');
  const [adiniIcon, setAdiniIcon] = useState('/assets/icons/adini-white.ico')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const section2Offset = 860;

      if (scrollY >= section2Offset) {
        setBackgroundColor('white');
        setHeaderBoxShadow('md');
        setLogoColor('#4d45d6');
        setItemsColor('');
        setAdiniIcon('/assets/icons/adini.ico');
        setContactButtonStyle(true);
      } else {
        setBackgroundColor('linear-gradient(to right, rgba(7, 30, 55, 0.9), rgba(7, 30, 55, 0.5))');
        setHeaderBoxShadow('')
        setLogoColor('white');
        setItemsColor('white');
        setAdiniIcon("/assets/icons/adini-white.ico");
        setContactButtonStyle(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 120;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
      onClose();
    }
  };
  return (
    <Box position="sticky" w="100%" height="auto" zIndex={10} top={0} transition="0.15s ease-in-out" bg={backgroundColor}>
      <Flex bg={backgroundColor} justifyContent="space-between" transition="0.15s ease-in-out" alignItems="center" py={{ base: 3, lg: 4 }} px={{ base: "30px", lg: "70px" }} boxShadow={headerBoxShadow}>
        <Flex align={"center"} onClick={() => scrollToSection("inicio")} cursor={"pointer"}>
          <Box
            width="33px"
            height="33px"
            mr={"7px"}
            mb={"4px"}
          >
            <img
              src={adiniIcon}
              alt="Adini"
            />
          </Box>
          <Text my={0} fontSize="28px" color={logoColor} fontFamily="Poppins, sans-serif">
            Adini
          </Text>
        </Flex>

        <Flex display={{ base: "none", lg: "flex" }} gap={12} fontSize="md">
          {['inicio', 'servicios', 'tecnologías', 'proyectos', 'contacto', 'nosotros'].map((section) => (
            <Text color={itemsColor} key={section} as="button" onClick={() => scrollToSection(section)} p="8px" _hover={{ color: contactButtonStyle ? "tertiary.500" : "#c5c2ff", cursor: "pointer" }}>
              {t(`header.${section}`)}
            </Text>
          ))}
        </Flex>
        <Button
          display={{ base: "none", lg: "flex" }}
          leftIcon={<HiMail />}
          variant="solid"
          bg={contactButtonStyle ? "tertiary.500" : "white"}
          color={contactButtonStyle ? "secondary.500" : "primary.500"}
          fontSize="md"
          _hover={{ transform: "scale(1.05)", bg: contactButtonStyle ? "#5548e6" : "quarter.500" }}
          onClick={() => scrollToSection("contacto")}
        >
          <Text my={0} fontSize={{ base: "sm", xl: "md" }}>contacto@adini.com.ar</Text>
        </Button>

        <IconButton
          display={{ base: "flex", lg: "none" }}
          icon={<FaBars />}
          variant="ghost"
          aria-label="Open Menu"
          onClick={onOpen}
          fontSize="22px"
          color={logoColor}
        />

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay bg="rgba(0, 0, 0, 0.4)" />
          <DrawerContent bg="white" p={4}>
            <DrawerCloseButton size="lg" color="gray.600" _hover={{ color: "black" }} />
            <DrawerHeader px={6} fontSize="xl" fontWeight="bold" color="gray.700">
              {t("header.menu")}
            </DrawerHeader>

            <Divider opacity={1} mt={2} />

            <DrawerBody>
              <Flex direction="column" justify={"space-between"} h={"100%"}>
                <Flex direction="column" gap={6}>
                  {["inicio", "servicios", "tecnologías", "proyectos", "nosotros"].map((section) => (
                    <Text
                      key={section}
                      as="button"
                      textAlign={"left"}
                      onClick={() => scrollToSection(section)}
                      fontSize="md"
                      fontWeight="medium"
                      color="gray.700"
                      transition="0.3s ease-in-out"
                      _hover={{ color: "tertiary.500", transform: "translateX(5px)" }}
                    >
                      {t(`header.${section}`)}
                    </Text>
                  ))}
                </Flex>

                <Box>
                  <Button
                    leftIcon={<HiMail />}
                    variant="solid"
                    bg="tertiary.500"
                    color="white"
                    fontSize="sm"
                    w="full"
                    p={0}
                    _hover={{ transform: "scale(1.05)", bg: "#5548e6" }}
                    onClick={() => scrollToSection("contacto")}
                  >
                    contacto@adini.com.ar
                  </Button>

                  <Divider opacity={1} />

                  <Flex align={"center"} justify={"center"}>
                    <Box
                      width="30px"
                      height="30px"
                      mr={"7px"}
                      mb={"4px"}
                    >
                      <img
                        src="/assets/icons/adini.ico"
                        alt="Adini"
                      />
                    </Box>
                    <Text my={0} fontSize="25px" color="#4d45d6" fontFamily="Poppins, sans-serif">
                      Adini
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}
