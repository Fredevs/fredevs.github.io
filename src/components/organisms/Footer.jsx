import { Box, Grid, GridItem, Text, Link, Icon, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    const information = {
        name: "Adini",
        email: "contacto@adini.com",
        instagram: "https://www.instagram.com/adini",
        linkedin: "https://www.linkedin.com/in/adini-undefined-985241327/",
        twitter: "https://twitter.com/adini",
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = 120;
            const top = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top: top,
                behavior: "smooth",
            });
        }
    };

    return (
        <Box bg="primary.500" color="gray.400" mt={"70px"} pt={12} px={{ base: 6, md: 20 }}>
            <Grid
                templateColumns={{ base: "1fr", md: "2fr 1fr 1fr 1fr" }}
                gap={10}
                textAlign={{ base: "center", md: "left" }}
            >
                <GridItem>
                    <Text fontSize="2xl" color="white" fontFamily="Poppins, sans-serif">
                        {information.name}
                    </Text>
                    <Text fontSize="sm" mt={2} mb={0} maxW={{ base: "auto", md: "450px" }}>
                        {t("footer.descripcion")}
                    </Text>
                </GridItem>

                <Divider display={{ base: "inherit", md: "none" }} opacity={.2} my={0} />

                <GridItem>
                    <Text fontWeight="bold" color="white" mb={3}>{t("footer.empresa.titulo")}</Text>
                    <VStack align={{ base: "center", md: "start" }} spacing={2}>
                        <Link onClick={() => scrollToSection("servicios")} _hover={{ color: "white" }}>{t("footer.empresa.servicios")}</Link>
                        <Link onClick={() => scrollToSection("tecnologías")} _hover={{ color: "white" }}>{t("footer.empresa.tecnologías")}</Link>
                        <Link onClick={() => scrollToSection("proyectos")} _hover={{ color: "white" }}>{t("footer.empresa.proyectos")}</Link>
                        <Link onClick={() => scrollToSection("nosotros")} _hover={{ color: "white" }}>{t("footer.empresa.nosotros")}</Link>

                    </VStack>
                </GridItem>

                <GridItem>
                    <Text fontWeight="bold" color="white" mb={3}>{t("footer.soporte.titulo")}</Text>
                    <VStack align={{ base: "center", md: "start" }} spacing={2}>
                        <Link href="#" _hover={{ color: "white" }}>{t("footer.soporte.ayuda")}</Link>

                        <Link onClick={() => scrollToSection("contacto")} _hover={{ color: "white" }}>{t("footer.soporte.contacto")}</Link>
                    </VStack>
                </GridItem>

                <GridItem>
                    <Text fontWeight="bold" color="white" mb={3}>{t("footer.redes.titulo")}</Text>
                    <HStack justify={{ base: "center", md: "start" }} spacing={4}>
                        {/* <Link href={information.instagram} isExternal>
                            <Icon as={FaInstagram} w={5} h={5} _hover={{ color: "white" }} />
                        </Link> */}
                        <Link href={information.linkedin} isExternal>
                            <Icon as={FaLinkedin} w={5} h={5} _hover={{ color: "white" }} />
                        </Link>
                        {/* <Link href={information.twitter} isExternal>
                            <Icon as={FaTwitter} w={5} h={5} _hover={{ color: "white" }} />
                        </Link> */}
                        <Link href={`mailto:${information.email}`} isExternal>
                            <Icon as={FaEnvelope} w={5} h={5} _hover={{ color: "white" }} />
                        </Link>
                    </HStack>
                </GridItem>
            </Grid>

            <Divider opacity={.2} my={8} />

            <Box pb={8}>
                <Text textAlign={"center"} m={0} fontSize="sm">
                    © {new Date().getFullYear()} {information.name}. {t("footer.end")}
                </Text>
            </Box>
        </Box>
    );
}
