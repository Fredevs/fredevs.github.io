import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import Title from "../molecules/Title";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
    const { t } = useTranslation();

    const teamMembers = [
        {
            name: "Agustín Acevedo",
            role: `${t("aboutUs.devops")} | ${t("aboutUs.sysadmin")}`,
            image: "/assets/images/agus.png",
            linkedin: "https://www.linkedin.com/in/agustinezequielacevedo/",
        },
        {
            name: "Alejo Suarez",
            role: `${t("aboutUs.desarrollador")} | ${t("aboutUs.analista")}`,
            image: "/assets/images/ale.png",
            linkedin: "https://www.linkedin.com/in/alejo-ezequiel-suarez/",
        },
        {
            name: "Gabriel Olivieri",
            role: `${t("aboutUs.desarrollador")} | ${t("aboutUs.devops")}`,
            image: "/assets/images/gabi.png",
            linkedin: "https://www.linkedin.com/in/gabriel-olivieri-38437b1bb/",
        },
        {
            name: "Juan Ignacio Diaz",
            role: `${t("aboutUs.bi")} | ${t("aboutUs.desarrollador")}`,
            image: "/assets/images/juani.png",
            linkedin: "https://www.linkedin.com/in/juan-ignacio-diaz-puig-49ab08231/",
        },
        {
            name: "Gonzalo Suarez",
            role: `${t("aboutUs.desarrollador")} | ${t("aboutUs.analista")}`,
            image: "/assets/images/gon.png",
            linkedin: "https://www.linkedin.com/in/suarez-gonzalo/",
        },
        {
            name: "Daniel Piñero",
            role: `${t("aboutUs.sysadmin")} | ${t("aboutUs.devops")}`,
            image: "/assets/images/dani.png",
            linkedin: "https://www.linkedin.com/in/daniel-alberto-pi%C3%B1ero-104a83119/",
        },
        {
            name: "Guido Gelvan",
            role: `${t("aboutUs.analista")} | ${t("aboutUs.desarrollador")}`,
            image: "/assets/images/guido.png",
            linkedin: "https://www.linkedin.com/in/guido-gelvan-b47070210/",
        }
    ];

    return (
        <>
            <Title title={t("aboutUs.titulo")} subtitle={t("aboutUs.subtitulo")} mt="60px" mb="60px" />

            <Flex align="center" justify="center">
                <Box maxW="1200px" textAlign="center" mx={{ base: "20px", md: "50px" }}>
                    <Flex justify="center" wrap="wrap" gap={{ base: "50px", md: 20 }}>
                        {teamMembers.map((member, index) => (
                            <Box key={index} textAlign="center">
                                <Box position={"relative"}>
                                    <Image
                                        boxShadow="md"
                                        src={member.image}
                                        alt={member.name}
                                        borderRadius="full"
                                        boxSize={{ base: "130px", md: "180px" }}
                                        mx="auto"
                                        mb={4}
                                        borderBottom="1px solid #071e37"
                                    />
                                    <Link position={"absolute"} right={3} bottom={0} href={member.linkedin} isExternal>
                                        <Box
                                            as="span"
                                            display="inline-flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            w="36px"
                                            h="36px"
                                            borderRadius="full"
                                            bg="#0077b5"
                                            transition="all 0.3s"
                                            _hover={{
                                                transform: "scale(1.1)",
                                            }}
                                        >
                                            <FaLinkedin size={20} color="white" />
                                        </Box>
                                    </Link>
                                </Box>
                                <Text m={0} fontWeight="bold" fontSize={{ base: "sm", md: "xl" }}>
                                    {member.name}
                                </Text>
                                <Box my={2} h="1px" bg="tertiary.500"></Box>
                                <Text color="gray.500" fontSize={{ base: "xs", md: "md" }}>
                                    {member.role}
                                </Text>

                            </Box>
                        ))}
                    </Flex >
                </Box >
            </Flex >
        </>
    );
}
