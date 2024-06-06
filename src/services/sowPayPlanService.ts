import { PaymentPlan } from '../models/sowPayPlanModel';

async function createPaymentPlan(paymentPlanData: any) {
  try {
    const paymentPlan = await PaymentPlan.create(paymentPlanData);
    return paymentPlan;
  }catch(error) {
    console.error('error while creating payment plan!!', error);
    throw error;
  }
}

async function findPaymentPlanBySOWId(sowId: string) {
  try {
    const paymentPlans = await PaymentPlan.findAll({ where: { sowId } });
    return paymentPlans;
  }catch(error) {
    console.error('error while finding payment plan', error);
    throw error;
  }
}

async function updatePaymentPlan(sowId: string, updateData: any) {
  try {
    const paymentPlans = await findPaymentPlanBySOWId(sowId);
    if (!paymentPlans) throw new Error('payment plans not found');
    await PaymentPlan.update(updateData, { where: { sowId } });
    return await findPaymentPlanBySOWId(sowId);
  }catch(error){
    console.error('error while updating payment plan', error);
    throw error;
  }
}

async function deletePaymentPlan(sowId: string) {
  try {
    const paymentPlans = await findPaymentPlanBySOWId(sowId);
    if (!paymentPlans) throw new Error('payment plans not found');
    await PaymentPlan.destroy({ where: { sowId } });
    return { message: 'payment plans deleted successfully' };
  }catch(error) {
    console.error('Error deleting payment plan:', error);
    throw error;
  }
}

async function getClientPaymentPlans(customerId: string) {
  try {
    const paymentPlans = await PaymentPlan.findAll({ where: { customerId } });
    return paymentPlans;
  } catch (error) {
    console.error('error while fetching client payment plans:', error);
    throw error;
  }
}

export {createPaymentPlan,findPaymentPlanBySOWId,updatePaymentPlan,deletePaymentPlan,getClientPaymentPlans};
