import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conectado ao MongoDB com sucesso");
  } catch (error) {
    console.error("Erro na conexão com MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB;
