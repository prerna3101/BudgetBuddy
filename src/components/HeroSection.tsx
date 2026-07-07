import { motion } from "framer-motion";

function HeroSection() {

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card border-0 rounded-4 shadow mb-4 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F97316 0%, #FF7F50 100%)",
        position: "relative",
      }}
    >
      <div className="card-body text-white p-4 position-relative">

        <div className="d-flex justify-content-between align-items-start flex-wrap">

          <div>
            <h2 className="fw-bold mb-2">
              👋 Welcome Back!
            </h2>

            <p className="mb-2">
              Manage your expenses smarter with BudgetBuddy 💰
            </p>
          </div>

          {/* Decorative Icon */}
          <div className="d-none d-md-block">
            <i
              className="bi bi-piggy-bank-fill"
              style={{
                fontSize: "60px",
                opacity: 0.20,
              }}
            ></i>
          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default HeroSection;