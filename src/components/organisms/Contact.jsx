import { Box, Button, Flex, Text, Textarea, Input, Icon, VStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import Title from "../molecules/Title";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import axios from "axios";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("comments", message);

      await axios.post("https://api-contactos.dev.adini.com.ar/comments/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setResponseMessage({ type: "success", text: t("contact.mensajeEnviado") });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setResponseMessage({ type: "error", text: t("contact.mensajeNoEnviado") });
    } finally {
      setLoading(false);
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <Title title={t("contact.titulo")} subtitle={t("contact.subtitulo")} mt="60px" mb="40px" />

      <Flex>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 0.8 }}
          style={{ width: "100%" }}
        >
          <Flex alignItems="center" justifyContent="left">
            <Box
              bg="white"
              p={8}
              pl={{ base: 8, lg: "15%" }}
              borderRadius={{ base: "none", lg: "md" }}
              borderTopLeftRadius={"none"}
              borderBottomLeftRadius={"none"}
              boxShadow="md"
              w={"100%"}
            >
              <Flex alignItems="center" mb={6}>
                <Icon as={HiMail} boxSize={8} color="#6c63ff" mr={4} />
                <Text my={0} fontSize="xl" fontWeight="bold" color="#071e37">
                  {t("contact.descripcion")}
                </Text>
              </Flex>

              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                  <Input
                    placeholder={t("contact.nombreInput")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    bg="#f9f9f9"
                    color="#071e37"
                    border="2px solid #e0e0e0"
                    _focus={{ borderColor: "#6c63ff" }}
                    borderRadius="md"
                    p={4}
                  />
                  <Input
                    type="email"
                    placeholder={t("contact.correoInput")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    bg="#f9f9f9"
                    color="#071e37"
                    border="2px solid #e0e0e0"
                    _focus={{ borderColor: "#6c63ff" }}
                    borderRadius="md"
                    p={4}
                  />
                  <Input
                    type="tel"
                    placeholder={t("contact.telefonoInput")}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    bg="#f9f9f9"
                    color="#071e37"
                    border="2px solid #e0e0e0"
                    _focus={{ borderColor: "#6c63ff" }}
                    borderRadius="md"
                    p={4}
                  />
                  <Textarea
                    placeholder={t("contact.mensajeInput")}
                    size="md"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    bg="#f9f9f9"
                    color="#071e37"
                    resize="vertical"
                    maxHeight="200px"
                    minHeight="150px"
                    border="2px solid #e0e0e0"
                    _focus={{ borderColor: "#6c63ff" }}
                    borderRadius="md"
                    p={4}
                  />
                  <Flex justifyContent="space-between" align="center">
                    {responseMessage ?
                      (
                        <Text pr={3} m={0} color={responseMessage.type === "success" ? "green.500" : "red.500"} fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
                          {responseMessage.text}
                        </Text>
                      ) :
                      (
                        <Text pr={3} m={0} fontSize={{ base: "md", md: "lg" }} color="#6c63ff" fontWeight="bold">
                          {t("contact.span")}
                        </Text>
                      )
                    }
                    <Button
                      bg="#6c63ff"
                      color="white"
                      _hover={{ bg: "#5548e2" }}
                      type="submit"
                      isDisabled={!message.trim() || !name.trim() || !email.trim() || loading}
                      rightIcon={<Icon as={FiSend} />}
                      borderRadius="md"
                      p={4}
                    >
                      {loading ? t("contact.mensajeEnviando") : t("contact.boton")}
                    </Button>
                  </Flex>
                </VStack>
              </form>
            </Box>
          </Flex>
        </motion.div>
        <Flex display={{ base: "none", lg: "inherit" }} align={"center"} justify={"center"}>
          <Box mx={{ base: "40px", "2xl": "120px" }} w={{ base: 350, xl: 400 }}>
            <Image src="/assets/icons/contact.svg" />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
