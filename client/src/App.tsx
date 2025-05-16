import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Page1 from "@/pages/Page1";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/startnow" component={Page1} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}